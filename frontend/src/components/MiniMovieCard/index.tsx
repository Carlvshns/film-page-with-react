import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";

type Props = {
    movie: Movie;
}

function MiniMovieCard( { movie } : Props){

    return(
        <div className="mini-movie-card-container">
            <Link to={`/form/${movie.id}`} style={{ textDecoration: 'none'}}>
                <img className="mini-image-movie-global" src={movie.image} alt={movie.name} />
            </Link>
        <div className="mini-movie-card-2nd-container">
            <div className="mini-movie-card-3rd-container">
            <h6 id="mini-movieCardName">{movie.name}</h6>
            </div>
            <Link to={`/form/${movie.id}`} style={{ textDecoration: 'none'}}>
                <div className="btn btn-primary" id="mini-assistirButton">Assistir</div>
            </Link>
        </div>
    </div>
    );
}

export default MiniMovieCard;