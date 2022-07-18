package carl.dev.com.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "tb_movie")
public class Movie {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(notes = "Movie ID", example = "1", required = true)
    private Long id;
    
    @NotNull(message = "The field 'name' is  mandatory")
    @ApiModelProperty(notes = "Movie name/title", example = "The Batman", required = true)
    private String name;
    
    @NotNull(message = "The field 'image' is  mandatory")
    @ApiModelProperty(notes = "Movie image URL", 
    example = "https://www.themoviedb.org/t/p/original/pev79DpUojF5qaWwedoEa2LT31i.jpg", required = true)
    private String image;
    
    @NotNull(message = "The field 'adress' is  mandatory")
    @ApiModelProperty(notes = "Movie video/webm URL", 
    example = "https://carlvs-cdn-video.herokuapp.com/medias/files/6212bfa1-2bb1-4144-999f-59d128b418aa", required = true)
    private String adress;
    
    @NotNull(message = "The field 'synopsis' is  mandatory")
    @ApiModelProperty(notes = "Movie resume synopsis", example = "The Batman show the history of...", required = true)
    private String synopsis;
    
    @NotNull(message = "The field 'genre' is  mandatory")
    @ApiModelProperty(notes = "Movie genre", example = "QUADRINHOS", required = true)
    private String genre;
    
    @NotNull(message = "The field 'uuid' is  mandatory")
    @ApiModelProperty(notes = "Movie ID type UUID", example = "6af1e316-479f-4a1c-af7d-c5765f80edf9", required = true)
    private String uuid;

    public Movie() {
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
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
