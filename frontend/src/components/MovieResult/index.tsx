import { Link } from "react-router-dom";

type Props = {
    movieName : string
}

function MovieResult( { movieName } : Props){
    return(
        <Link to={`/search/${movieName}`}></Link>
    )
}

export default MovieResult;