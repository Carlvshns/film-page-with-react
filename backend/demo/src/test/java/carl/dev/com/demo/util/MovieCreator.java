package carl.dev.com.demo.util;

import carl.dev.com.demo.domain.Movie;

public class MovieCreator {
    
    public static Movie movieCreator(){
        Movie movie = new Movie();
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
