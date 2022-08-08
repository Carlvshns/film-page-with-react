import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";

type Props = {
    movie: Movie;
}

function MiniMovieCard( { movie } : Props){

    return(
        <div className="mini-movie-card-container">
            <Link to={`/film/${movie.uuid}`} style={{ textDecoration: 'none'}}>
                <img className="mini-image-movie-global" src={movie.image} alt={movie.name} />
                <div className="middle">
                    <div className="mini-name-movie">{movie.name}
                    </div>
                </div>
            </Link>
            <div className="mini-movie-card-2nd-container">
                <div className="mini-movie-card-3rd-container">
            </div>
                <Link to={`/film/${movie.uuid}`} style={{ textDecoration: 'none'}}>
                    <div className="mini-divAssistirButton">
                    <div className="btn btn-primary" id="mini-assistirButton">Assistir&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-collection-play-fill" viewBox="0 0 16 16">
                        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"/>
                        </svg>
                    </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MiniMovieCard;