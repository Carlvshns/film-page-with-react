package carl.dev.com.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import carl.dev.com.demo.domain.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByNameIgnoreCaseContaining(String name);
}
