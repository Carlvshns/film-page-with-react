package carl.dev.com.demo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import carl.dev.com.demo.domain.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    Page<Movie> findByNameIgnoreCaseContaining(String name, Pageable pageable);

    Page<Movie> findByGenreIgnoreCaseContaining(String genre, Pageable pageable);

    Movie findByName(String name);
}
