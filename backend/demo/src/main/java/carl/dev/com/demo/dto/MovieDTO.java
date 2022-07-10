package carl.dev.com.demo.dto;

import carl.dev.com.demo.domain.Movie;
import io.swagger.annotations.ApiModelProperty;

public class MovieDTO {
    
    @ApiModelProperty(notes = "Movie ID", example = "1", required = true)
    private Long id;
    @ApiModelProperty(notes = "Movie name/title", example = "The Batman", required = true)
    private String name;
    @ApiModelProperty(notes = "Movie image URL", 
    example = "https://www.themoviedb.org/t/p/original/pev79DpUojF5qaWwedoEa2LT31i.jpg")
    private String image;
    @ApiModelProperty(notes = "Movie video/webm URL", 
    example = "https://carlvs-cdn-video.herokuapp.com/medias/files/6212bfa1-2bb1-4144-999f-59d128b418aa")
    private String adress;
    @ApiModelProperty(notes = "Movie resume synopsis", example = "The Batman show the history of...")
    private String synopsis;
    @ApiModelProperty(notes = "Movie genre", example = "QUADRINHOS", required = true)
    private String genre;
    @ApiModelProperty(notes = "Movie ID type UUID", example = "6af1e316-479f-4a1c-af7d-c5765f80edf9"
    , required = true)
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
