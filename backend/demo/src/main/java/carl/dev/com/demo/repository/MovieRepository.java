package carl.dev.com.demo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import carl.dev.com.demo.domain.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    Page<Movie> findByNameIgnoreCaseContaining(String name, Pageable pageable);

    Page<Movie> findByGenreIgnoreCaseContaining(String genre, Pageable pageable);

    @Query("select c from Movie c where c.genre = 'SUPER-HEROI' ")
    Page<Movie> findGenreSuperHeroi(Pageable pageable);

    @Query("select c from Movie c where c.genre = 'FILME DE ANIME' ")
    Page<Movie> findGenreFilmeDeAnime(Pageable pageable);
}
