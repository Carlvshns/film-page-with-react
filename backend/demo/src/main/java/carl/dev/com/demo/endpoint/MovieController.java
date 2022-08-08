package carl.dev.com.demo.endpoint;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import carl.dev.com.demo.domain.Movie;
import carl.dev.com.demo.dto.MovieDTO;
import carl.dev.com.demo.service.MovieService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;

@RestController
@RequestMapping(value = "/movies")
@Api(value = "Endpoints to manage Movies")
public class MovieController {

    private MovieService movieService;
    
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @ApiOperation(value = "List all available Movies")
    @ApiResponse(code = 200, message = "OK", response = MovieDTO[].class)
    @GetMapping(produces = "application/json")
    public ResponseEntity<Page<MovieDTO>> findAll(Pageable pageable){
        return ResponseEntity.ok(movieService.findAll(pageable));
    }

    @ApiOperation(value = "Return unique Movie based on ID")
    @ApiResponse(code = 200, message = "OK", response = MovieDTO.class)
    @GetMapping(path = "/{id}", produces = "application/json")
    public ResponseEntity<MovieDTO> findById(@PathVariable("id") Long id){
        return ResponseEntity.ok(movieService.findById(id));
    }

    @ApiOperation(value = "List various Movies based on NAME passed param")
    @ApiResponse(code = 200, message = "OK", response = MovieDTO[].class)
    @GetMapping(path = "/search/{name}", produces = "application/json")
    public ResponseEntity<Page<MovieDTO>> findByNameIgnoreCaseContaining(@PathVariable String name, Pageable pageable){
        return new ResponseEntity<>(movieService.findByNameIgnoreCaseContaining(name, pageable), HttpStatus.OK);
    }

    @ApiOperation(value = "List various Movies based on GENRE passed param")
    @ApiResponse(code = 200, message = "OK", response = MovieDTO[].class)
    @GetMapping(path = "/find-by-genre/{genre}", produces = "application/json")
    public ResponseEntity<Page<MovieDTO>> findByGenreIgnoreCaseContaining(@PathVariable String genre, Pageable pageable){
        return new ResponseEntity<>(movieService.findByGenreIgnoreCaseContaining(genre, pageable), HttpStatus.OK);
    }

    @ApiOperation(value = "Save Movie in Database(password is necessary in url)")
    @ApiResponse(code = 201, message = "CREATED/SAVED", response = MovieDTO.class)
    @PutMapping(path = "/create/{pass}", produces = "application/json", consumes = "application/json")
    public ResponseEntity<MovieDTO> save(@Valid @RequestBody Movie movie, @PathVariable String pass){
        return new ResponseEntity<>(movieService.save(movie, pass), HttpStatus.CREATED);
    }

    @ApiOperation(value = "Delete a Movie based on ID(password is necessary in url)")
    @ApiResponse(code = 204, message = "No Content/Deleted", response = Void.class)
    @DeleteMapping(path = "/delete/{id}/{pass}", produces = "application/empty-json")
    public ResponseEntity<Void> deleteById(@PathVariable Long id, @PathVariable String pass){
        movieService.deleteById(id, pass);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @ApiOperation(value = "Return unique Movie based on NAME")
    @ApiResponse(code = 200, message = "OK", response = MovieDTO.class)
    @GetMapping(path = "/find-by-name/{name}", produces = "application/json")
    public ResponseEntity<MovieDTO> findByName(@PathVariable String name){
        return ResponseEntity.ok(movieService.findByName(name));
    }

    @ApiOperation(value = "Return unique Movie based on UUID")
    @ApiResponse(code = 200, message = "OK", response = MovieDTO.class)
    @GetMapping(path = "/find-by-uuid/{uuid}", produces = "application/json")
    public ResponseEntity<MovieDTO> findByUuid(@PathVariable String uuid){
        return ResponseEntity.ok(movieService.findByUuid(uuid));
    }
}
