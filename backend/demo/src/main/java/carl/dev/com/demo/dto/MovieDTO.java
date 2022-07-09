package carl.dev.com.demo.dto;

import carl.dev.com.demo.domain.Movie;

public class MovieDTO {
    
    private Long id;
    private String name;
    private String image;
    private String adress;
    private String synopsis;
    private String genre;
    private String uuid;
    
    public MovieDTO() {
    }

    public MovieDTO(Long id, String name, String image, String adress, 
    String synopsis, String genre, String uuid) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.adress = adress;
        this.synopsis = synopsis;
        this.genre = genre;
        this.uuid = uuid;
    }

    public MovieDTO(Movie movie) {
        id = movie.getId();
        name = movie.getName();
        image = movie.getImage();
        adress = movie.getAdress();
        synopsis = movie.getSynopsis();
        genre = movie.getGenre();
        uuid = movie.getUuid();
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }

    public String getAdress() {
        return adress;
    }
    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getSynopsis() {
        return synopsis;
    }
    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getGenre() {
        return genre;
    }
    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getUuid() {
        return uuid;
    }
    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    
}
