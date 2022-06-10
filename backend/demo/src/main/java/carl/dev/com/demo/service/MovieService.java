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

    private String pass = "rockblin0123";

    public Page<Movie> findAll(Pageable pageable){
        return movieRepository.findAll(pageable);
    }

    public Page<Movie> findByNameIgnoreCaseContaining(String name, Pageable pageable){
        return movieRepository.findByNameIgnoreCaseContaining(name, pageable);
    }

    public Movie findById(Long id){
        return movieRepository.findById(id).get();
    }

    public Page<Movie> findByGenreIgnoreCaseContaining(String genre, Pageable pageable){
        return movieRepository.findByGenreIgnoreCaseContaining(genre, pageable);
    }

    public Movie save(Movie movie, String pass){
        if(pass.equals(this.pass)){
        return movieRepository.save(movie);
        }else{
            throw new IllegalArgumentException("Senha incorreta/Invalid password");
        }
    }

    public void deleteById(Long id, String pass){
        if(pass.equals(this.pass)){
        movieRepository.deleteById(id);
        }else{
            throw new IllegalArgumentException("Senha incorreta/Invalid password");
        }
    }
   
    public Movie findByName(String name){
        return movieRepository.findByName(name);
    }

    public Movie findByUuid(String uuid){
        return movieRepository.findByUuid(uuid);
    }
}
