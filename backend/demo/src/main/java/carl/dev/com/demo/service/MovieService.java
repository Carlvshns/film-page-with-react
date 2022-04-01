package carl.dev.com.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import carl.dev.com.demo.domain.Movie;
import carl.dev.com.demo.repository.MovieRepository;

@Service
public class MovieService {
    
    private MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Page<Movie> findAll(Pageable pageable){
        return movieRepository.findAll(pageable);
    }

    public List<Movie> findByName(String name){
        return movieRepository.findByNameIgnoreCaseContaining(name);
    }

    public Movie findById(long id){
        return movieRepository.findById(id).get();
    }
   
}
