import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props){

    return(
        <div className="movie-card-container">
            <img className="image-movie-global" src={movie.image} alt={movie.name} />
            <div className="movie-card-2nd-container">
                <div className="movie-card-3rd-container">
                <h3>{movie.name}</h3>
                </div>
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary" id="assistirButton">Assistir</div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard;