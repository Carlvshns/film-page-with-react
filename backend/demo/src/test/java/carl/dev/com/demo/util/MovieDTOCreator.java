package carl.dev.com.demo.util;

import carl.dev.com.demo.dto.MovieDTO;

public class MovieDTOCreator {
    
    public static MovieDTO movieDTOCreator(){
        MovieDTO movie = new MovieDTO();
        movie.setId(1L);
        movie.setName("Homem-Aranha");
        movie.setAdress("http://");
        movie.setImage("image");
        movie.setGenre("SUPER-HEROI");
        movie.setSynopsis("Picado por aranha e bla");
        movie.setUuid("fa652685-1363-41c0-9a26-2a53e1951abf");
        return movie;
    }
}
