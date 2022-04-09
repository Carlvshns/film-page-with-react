package carl.dev.com.demo.endpoint;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import carl.dev.com.demo.domain.Movie;
import carl.dev.com.demo.service.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

    private MovieService movieService;
    
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public ResponseEntity<Page<Movie>> findAll(Pageable pageable){
        return ResponseEntity.ok(movieService.findAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Movie> findById(@PathVariable long id){
        return ResponseEntity.ok(movieService.findById(id));
    }

    @GetMapping(path = "/search/{name}")
    public ResponseEntity<Page<Movie>> findByName(@PathVariable String name, Pageable pageable){
        return new ResponseEntity<>(movieService.findByName(name, pageable), HttpStatus.OK);
    }

    /*@GetMapping(path = "/genre/super_heroi")
    public ResponseEntity<Page<Movie>> findGenreSeperHeroi(){
        return new ResponseEntity<>(movieService.findGenreSuperHeroi(), HttpStatus.OK);
    }

    @GetMapping(path = "/genre/filme_de_anime")
    public ResponseEntity<Page<Movie>> findGenreFilmeDeAnime(){
        return new ResponseEntity<>(movieService.findGenreFilmeDeAnime(), HttpStatus.OK);
    }*/

    @GetMapping(path = "/findByGenre/{genre}")
    public ResponseEntity<Page<Movie>> findByGenre(@PathVariable String genre, Pageable pageable){
        return new ResponseEntity<>(movieService.findByGenre(genre, pageable), HttpStatus.OK);
    }

}
