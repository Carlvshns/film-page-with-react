package carl.dev.com.demo.repository;

import java.util.Optional;

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
    @DisplayName("FindAll returns list page of Movies when Sucessful")
    void findAll_ReturnsPageOfMovies_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        this.movieRepository.save(movieToBeSaved);

        Pageable pageable = Pageable.ofSize(5);

        Page<Movie> movies = this.movieRepository.findAll(pageable);

        Assertions.assertFalse(movies.isEmpty());
    }

    @Test
    @DisplayName("FindById return Movie when Sucessful")
    void findById_ReturnsMovie_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        this.movieRepository.save(movieToBeSaved);

        Movie movies = this.movieRepository.findById(movieToBeSaved.getId()).get();

        Assertions.assertEquals("image", movies.getImage());
    }

    @Test
    @DisplayName("FindByName returns list page of Movies when Sucessful")
    void findByName_ReturnsPageOfMovies_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        this.movieRepository.save(movieToBeSaved);

        Pageable pageable = Pageable.ofSize(5);

        Page<Movie> movies = this.movieRepository.findByNameIgnoreCaseContaining
        (movieToBeSaved.getName(), pageable);

        Assertions.assertFalse(movies.isEmpty());
    }

    @Test
    @DisplayName("FindByGenre returns list page of Movies when Sucessful")
    void findByGenre_ReturnsPageOfMovies_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        this.movieRepository.save(movieToBeSaved);

        Pageable pageable = Pageable.ofSize(5);

        Page<Movie> movies = this.movieRepository.findByGenreIgnoreCaseContaining
        (movieToBeSaved.getGenre(), pageable);

        Assertions.assertFalse(movies.isEmpty());
    }

    @Test
    @DisplayName("Save persists movie when Sucessful")
    void save_PersistMovie_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();

        Movie movieSaved = this.movieRepository.save(movieToBeSaved);

        Assertions.assertNotNull(movieSaved);

        Assertions.assertNotNull(movieSaved.getId());

        Assertions.assertEquals(movieSaved.getName(), movieToBeSaved.getName());
    }

    @Test
    @DisplayName("Delete removes anime when Sucessful")
    void delete_RemovesAnime_WhenSucessful(){
        Movie movieToBeSaved = MovieCreator.movieCreator();
        
        Movie movieSaved = this.movieRepository.save(movieToBeSaved);
        
        this.movieRepository.deleteById(movieSaved.getId());

        Optional<Movie> movieDeleted = this.movieRepository.findById(movieSaved.getId());

        Assertions.assertTrue(movieDeleted.isEmpty());
    }
}
