package carl.dev.com.demo.service;

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

    public Page<Movie> findByNameIgnoreCaseContaining(String name, Pageable pageable){
        return movieRepository.findByNameIgnoreCaseContaining(name, pageable);
    }

    public Movie findById(Long id){
        return movieRepository.findById(id).get();
    }

    public Page<Movie> findByGenre(String genre, Pageable pageable){
        return movieRepository.findByGenreIgnoreCaseContaining(genre, pageable);
    }

    public Movie save(Movie movie){
        return movieRepository.save(movie);
    }

    public void deleteById(Long id){
        movieRepository.deleteById(id);
    }
   
    public Movie findByName(String name){
        return movieRepository.findByName(name);
    }
}
