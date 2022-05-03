package carl.dev.com.demo.service;

import java.util.List;
import java.util.Optional;

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
import org.springframework.test.context.junit.jupiter.SpringExtension;

import carl.dev.com.demo.domain.Movie;
import carl.dev.com.demo.repository.MovieRepository;
import carl.dev.com.demo.util.MovieCreator;

@ExtendWith(SpringExtension.class)
public class MovieServiceTest {

    @InjectMocks
    private MovieService movieService;
    @Mock
    private MovieRepository movieRepositoryMock;

    @BeforeEach
    void setUp(){
        PageImpl<Movie> moviePage = new PageImpl<>(List.of(MovieCreator.movieCreator()));
        
        BDDMockito.when(movieRepositoryMock.findAll(ArgumentMatchers.any(PageRequest.class)))
        .thenReturn(moviePage);

        BDDMockito.when(movieRepositoryMock.findById(ArgumentMatchers.anyLong()))
        .thenReturn(Optional.of(MovieCreator.movieCreator()));

        BDDMockito.when(movieRepositoryMock.findByNameIgnoreCaseContaining(ArgumentMatchers.anyString(), ArgumentMatchers.any(PageRequest.class)))
        .thenReturn(moviePage);

        BDDMockito.when(movieRepositoryMock.findByGenreIgnoreCaseContaining(ArgumentMatchers.anyString(), ArgumentMatchers.any(PageRequest.class)))
        .thenReturn(moviePage);

        BDDMockito.when(movieRepositoryMock.save(ArgumentMatchers.any(Movie.class)))
        .thenReturn(MovieCreator.movieCreator());

        BDDMockito.doNothing().when(movieRepositoryMock).deleteById(ArgumentMatchers.anyLong());
    }

    @Test
    @DisplayName("findAll returns list of movie inside page object when sucessful")
    void findAll_ReturnsListOfMoviesInsidePageObect_WhenSucessful() {
        String expectedMovieName = MovieCreator.movieCreator().getName();
        Page<Movie> moviePage = movieService.findAll(PageRequest.of(1, 1));

        Assertions.assertNotNull(moviePage);

        Assertions.assertFalse(moviePage.toList().isEmpty());

        Assertions.assertEquals(1, moviePage.toList().size());

        Assertions.assertEquals(expectedMovieName, moviePage.toList().get(0).getName());
    }

    @Test
    @DisplayName("findById returns movie when sucessful")
    void findById_ReturnsAnime_WhenSucessful() {
        Movie expectedMovie = MovieCreator.movieCreator();
        Movie movies = movieService.findById(1);

        Assertions.assertNotNull(movies);

        Assertions.assertEquals(expectedMovie.getId(), movies.getId());

        Assertions.assertEquals(expectedMovie.getName(), movies.getName());
    }

    @Test
    @DisplayName("findByName returns a list of movie inside page object when sucessful")
    void findByName_ReturnsListOfMoviesInsidePageObject_WhenSucessful() {
        String expectedMovieName = MovieCreator.movieCreator().getName();
        Pageable pageable = Pageable.ofSize(1);
        Page<Movie> movies = movieService.findByName(expectedMovieName, pageable);

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
        Page<Movie> movies = movieService.findByGenre(expectedMovieGenre, pageable);

        Assertions.assertNotNull(movies);

        Assertions.assertFalse(movies.isEmpty());

        Assertions.assertEquals(1, movies.getSize());

        Assertions.assertEquals(expectedMovieGenre, movies.toList().get(0).getGenre());
    }

    @Test
    @DisplayName("save returns movie when sucessful")
    void save_ReturnsMovie_WhenSucessful() {
        Movie expectedMovie = MovieCreator.movieCreator();
        Movie movie = movieService.save(expectedMovie);

        Assertions.assertNotNull(movie);

        Assertions.assertEquals(expectedMovie.getId(), MovieCreator.movieCreator().getId());

        Assertions.assertEquals(expectedMovie.getName(), movie.getName());
    }

    @Test
    @DisplayName("delete removes movie when sucessful")
    void delete_RemovesMovie_WhenSucessful() {
        Assertions.assertDoesNotThrow(() -> movieService.deleteById(1L));
    }
}
