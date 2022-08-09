package carl.dev.com.demo.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import carl.dev.com.demo.domain.Movie;
import carl.dev.com.demo.dto.MovieDTO;
import carl.dev.com.demo.exception.InvalidPassphraseException;
import carl.dev.com.demo.repository.MovieRepository;

@Service
@Transactional
public class MovieService {
    
    private MovieRepository movieRepository;
    private MasterService masterService;

    public MovieService(MovieRepository movieRepository, MasterService masterService) {
        this.movieRepository = movieRepository;
        this.masterService = masterService;
    }

    public Page<MovieDTO> findAll(Pageable pageable){
        Page<Movie> movie = movieRepository.findAll(pageable);
        Page<MovieDTO> movieDTOPage = movie.map(x -> new MovieDTO(x));
        return movieDTOPage;
    }

    public Page<MovieDTO> findByNameIgnoreCaseContaining(String name, Pageable pageable){
        Page<Movie> movie = movieRepository.findByNameIgnoreCaseContaining(name, pageable);
        Page<MovieDTO> movieDTOPage = movie.map(x -> new MovieDTO(x));
        return movieDTOPage;
    }

    public MovieDTO findById(Long id){
        Movie movie = movieRepository.findById(id).get();
        MovieDTO movieDTO = new MovieDTO(movie);
        return movieDTO;
    }

    public Page<MovieDTO> findByGenreIgnoreCaseContaining(String genre, Pageable pageable){
        Page<Movie> movie = movieRepository.findByGenreIgnoreCaseContaining(genre, pageable);
        Page<MovieDTO> movieDTOPage = movie.map(x -> new MovieDTO(x));
        return movieDTOPage;
    }

    public MovieDTO save(Movie movie, String pass){
        String passphrase = masterService.findByPassphraseAndReturnPassphraseString(pass);
        if(pass.equals(passphrase)){
            Movie movieSaved = movieRepository.save(movie);
            MovieDTO movieDTO = new MovieDTO(movieSaved);
            return movieDTO;
        }else{
            throw new InvalidPassphraseException("Senha incorreta/Invalid password");
        }
    }

    public void deleteById(Long id, String pass){
        String passphrase = masterService.findByPassphraseAndReturnPassphraseString(pass);
        if(pass.equals(passphrase)){
            movieRepository.deleteById(id);
        }else{
            throwsInvalidPassphraseExceptionWhenPassIncorrect();
        }
    }

    private void throwsInvalidPassphraseExceptionWhenPassIncorrect(){
        throw new InvalidPassphraseException("Senha incorreta/Invalid password");
    }
   
    public MovieDTO findByName(String name){
        Movie movie = movieRepository.findByName(name);
        MovieDTO movieDTO = new MovieDTO(movie);
        return movieDTO;
    }

    public MovieDTO findByUuid(String uuid){
        Movie movie = movieRepository.findByUuid(uuid);
        MovieDTO movieDTO = new MovieDTO(movie);
        return movieDTO;
    }
}
