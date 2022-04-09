package carl.dev.com.demo.repository;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import carl.dev.com.demo.domain.Movie;
import carl.dev.com.demo.util.MovieCreator;

@DataJpaTest
@DisplayName("Tests for Movie Repository")
public class MovieRepositoryTest {

    @Autowired
    private MovieRepository movieRepository;

    @Test
    @DisplayName("Find All returns list page of Movies when Sucessful")
    void findAll_ReturnsPageOfMovies_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        this.movieRepository.save(movieToBeSaved);

        Pageable pageable = Pageable.ofSize(5);

        Page<Movie> movies = this.movieRepository.findAll(pageable);

        Assertions.assertFalse(movies.isEmpty());
    }

    @Test
    @DisplayName("Find By Id return Movie when Sucessful")
    void findById_ReturnsMovie_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        this.movieRepository.save(movieToBeSaved);

        Movie movies = this.movieRepository.findById(movieToBeSaved.getId()).get();

        Assertions.assertEquals("image", movies.getImage());
    }

    @Test
    @DisplayName("Find By Name returns list page of Movies when Sucessful")
    void findByName_ReturnsPageOfMovies_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        this.movieRepository.save(movieToBeSaved);

        Pageable pageable = Pageable.ofSize(5);

        Page<Movie> movies = this.movieRepository.findByNameIgnoreCaseContaining
        (movieToBeSaved.getName(), pageable);

        Assertions.assertFalse(movies.isEmpty());
    }

    @Test
    @DisplayName("Find By Genre returns list page of Movies when Sucessful")
    void findByGenre_ReturnsPageOfMovies_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        this.movieRepository.save(movieToBeSaved);

        Pageable pageable = Pageable.ofSize(5);

        Page<Movie> movies = this.movieRepository.findByGenreIgnoreCaseContaining
        (movieToBeSaved.getGenre(), pageable);

        Assertions.assertFalse(movies.isEmpty());
    }

}
