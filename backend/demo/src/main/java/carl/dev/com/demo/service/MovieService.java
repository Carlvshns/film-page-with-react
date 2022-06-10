package carl.dev.com.demo.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import carl.dev.com.demo.domain.Movie;
import carl.dev.com.demo.repository.MovieRepository;

@Service
public class MovieService {
    
    private MovieRepository movieRepository;
    private MasterService masterService;

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

    public Page<Movie> findByGenreIgnoreCaseContaining(String genre, Pageable pageable){
        return movieRepository.findByGenreIgnoreCaseContaining(genre, pageable);
    }

    public Movie save(Movie movie, String pass){
        String passphrase = masterService.findByPassphraseAndReturnPassphraseString(pass);
        if(pass.equals(passphrase)){
        return movieRepository.save(movie);
        }else{
            throw new IllegalArgumentException("Senha incorreta/Invalid password");
        }
    }

    public void deleteById(Long id, String pass){
        String passphrase = masterService.findByPassphraseAndReturnPassphraseString(pass);
        if(pass.equals(passphrase)){
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
