package carl.dev.com.demo.endpoint;

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

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

    private MovieService movieService;
    
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public ResponseEntity<Page<MovieDTO>> findAll(Pageable pageable){
        return ResponseEntity.ok(movieService.findAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<MovieDTO> findById(@PathVariable Long id){
        return ResponseEntity.ok(movieService.findById(id));
    }

    @GetMapping(path = "/search/{name}")
    public ResponseEntity<Page<MovieDTO>> findByNameIgnoreCaseContaining(@PathVariable String name, Pageable pageable){
        return new ResponseEntity<>(movieService.findByNameIgnoreCaseContaining(name, pageable), HttpStatus.OK);
    }

    @GetMapping(path = "/findByGenre/{genre}")
    public ResponseEntity<Page<MovieDTO>> findByGenreIgnoreCaseContaining(@PathVariable String genre, Pageable pageable){
        return new ResponseEntity<>(movieService.findByGenreIgnoreCaseContaining(genre, pageable), HttpStatus.OK);
    }

    @PutMapping(path = "/create/{pass}")
    public ResponseEntity<MovieDTO> save(@RequestBody Movie movie, @PathVariable String pass){
        return new ResponseEntity<>(movieService.save(movie, pass), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/delete/{id}/{pass}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id, @PathVariable String pass){
        movieService.deleteById(id, pass);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping(path = "/findByName/{name}")
    public ResponseEntity<MovieDTO> findByName(@PathVariable String name){
        return ResponseEntity.ok(movieService.findByName(name));
    }

    @GetMapping(path = "/findByUuid/{uuid}")
    public ResponseEntity<MovieDTO> findByUuid(@PathVariable String uuid){
        return ResponseEntity.ok(movieService.findByUuid(uuid));
    }
}
