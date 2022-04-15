import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props){

    return(
        <div className="movie-card-container">
            <Link to={`/form/${movie.id}`} style={{ textDecoration: 'none'}}>
                <img className="image-movie-global" src={movie.image} alt={movie.name} />
            </Link>
            <div className="movie-card-2nd-container">
                <div className="movie-card-3rd-container">
                <h5 id="movieCardName">{movie.name}</h5>
                </div>
                <Link to={`/form/${movie.id}`} style={{ textDecoration: 'none'}}>
                    <div className="btn btn-primary" id="assistirButton">Assistir</div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard;