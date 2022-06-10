package carl.dev.com.demo.endpoint;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import carl.dev.com.demo.domain.Movie;
import carl.dev.com.demo.service.MovieService;
import carl.dev.com.demo.util.MovieCreator;

@ExtendWith(SpringExtension.class)
public class MovieControllerTest {

    @InjectMocks
    private MovieController movieController;
    @Mock
    private MovieService movieServiceMock;

    @BeforeEach
    void setUp(){
        PageImpl<Movie> moviePage = new PageImpl<>(List.of(MovieCreator.movieCreator()));
        
        BDDMockito.when(movieServiceMock.findAll(ArgumentMatchers.any(PageRequest.class)))
        .thenReturn(moviePage);

        BDDMockito.when(movieServiceMock.findById(ArgumentMatchers.anyLong()))
        .thenReturn(MovieCreator.movieCreator());

        BDDMockito.when(movieServiceMock.findByNameIgnoreCaseContaining(ArgumentMatchers.anyString(), ArgumentMatchers.any(PageRequest.class)))
        .thenReturn(moviePage);

        BDDMockito.when(movieServiceMock.findByGenreIgnoreCaseContaining(ArgumentMatchers.anyString(), ArgumentMatchers.any(PageRequest.class)))
        .thenReturn(moviePage);

        BDDMockito.when(movieServiceMock.save(ArgumentMatchers.any(Movie.class), ArgumentMatchers.anyString()))
        .thenReturn(MovieCreator.movieCreator());

        BDDMockito.doNothing().when(movieServiceMock).deleteById(ArgumentMatchers.anyLong(), ArgumentMatchers.anyString());

        BDDMockito.when(movieServiceMock.findByName(ArgumentMatchers.anyString()))
        .thenReturn(MovieCreator.movieCreator());

        BDDMockito.when(movieServiceMock.findByUuid(ArgumentMatchers.anyString()))
        .thenReturn(MovieCreator.movieCreator());
    }

    @Test
    @DisplayName("findAll returns list of movie inside page object when sucessful")
    void findAll_ReturnsListOfMoviesInsidePageObect_WhenSucessful() {
        String expectedMovieName = MovieCreator.movieCreator().getName();
        Page<Movie> moviePage = movieController.findAll(PageRequest.of(1, 1)).getBody();

        Assertions.assertNotNull(moviePage);

        Assertions.assertFalse(moviePage.toList().isEmpty());

        Assertions.assertEquals(1, moviePage.toList().size());

        Assertions.assertEquals(expectedMovieName, moviePage.toList().get(0).getName());
    }

    @Test
    @DisplayName("findById returns movie when sucessful")
    void findById_ReturnsMovie_WhenSucessful() {
        Movie expectedMovie = MovieCreator.movieCreator();
        Movie movies = movieController.findById(1L).getBody();

        Assertions.assertNotNull(movies);

        Assertions.assertEquals(expectedMovie.getId(), movies.getId());

        Assertions.assertEquals(expectedMovie.getName(), movies.getName());
    }

    @Test
    @DisplayName("findByNameIgnoringCase returns a list of movie inside page object when sucessful")
    void findByNameIgnoringCase_ReturnsListOfMoviesInsidePageObject_WhenSucessful() {
        String expectedMovieName = MovieCreator.movieCreator().getName();
        Pageable pageable = Pageable.ofSize(1);
        Page<Movie> movies = movieController.findByNameIgnoreCaseContaining(expectedMovieName, pageable).getBody();

        Assertions.assertNotNull(movies);

        Assertions.assertFalse(movies.isEmpty());

        Assertions.assertEquals(1, movies.getSize());

        Assertions.assertEquals(expectedMovieName, movies.toList().get(0).getName());
    }

    @Test
    @DisplayName("findByGenre returns a list of movie inside page object when sucessful")
    void findByGenre_ReturnsListOfMoviesInsidePageObject_WhenSucessful() {
        String expectedMovieGenre = MovieCreator.movieCreator().getGenre();
        Pageable pageable = Pageable.ofSize(1);
        Page<Movie> movies = movieController.findByGenreIgnoreCaseContaining(expectedMovieGenre, pageable).getBody();

        Assertions.assertNotNull(movies);

        Assertions.assertFalse(movies.isEmpty());

        Assertions.assertEquals(1, movies.getSize());

        Assertions.assertEquals(expectedMovieGenre, movies.toList().get(0).getGenre());
    }

    @Test
    @DisplayName("save returns movie when sucessful")
    void save_ReturnsMovie_WhenSucessful() {
        Movie expectedMovie = MovieCreator.movieCreator();
        ResponseEntity<Movie> movie = movieController.save(expectedMovie, "rock");

        Assertions.assertNotNull(movie);

        Assertions.assertEquals(expectedMovie.getId(), MovieCreator.movieCreator().getId());

        Assertions.assertEquals(expectedMovie.getName(), movie.getBody().getName());
    }

    @Test
    @DisplayName("delete removes movie when sucessful")
    void delete_RemovesMovie_WhenSucessful() {
        Assertions.assertDoesNotThrow(() -> movieController.deleteById(1L, "rock"));
    }

    @Test
    @DisplayName("findByName returns movie when sucessful")
    void findByName_ReturnsMovie_WhenSucessful() {
        Movie expectedMovie = MovieCreator.movieCreator();
        Movie movies = movieController.findByName(expectedMovie.getName()).getBody();

        Assertions.assertNotNull(movies);

        Assertions.assertEquals(expectedMovie.getId(), movies.getId());

        Assertions.assertEquals(expectedMovie.getName(), movies.getName());
    }

    @Test
    @DisplayName("findByUuid returns movie when sucessful")
    void findByUuid_ReturnsMovie_WhenSucessful() {
        Movie expectedMovie = MovieCreator.movieCreator();
        Movie movies = movieController.findByUuid(expectedMovie.getUuid()).getBody();

        Assertions.assertNotNull(movies);

        Assertions.assertEquals(expectedMovie.getId(), movies.getId());

        Assertions.assertEquals(expectedMovie.getName(), movies.getName());
    }

}
