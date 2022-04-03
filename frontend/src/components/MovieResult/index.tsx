import { Link } from "react-router-dom";

type Props = {
    movieName : any
}

function MovieResult( { movieName } : Props){
    return(
        <Link to={`/search/${movieName}`}></Link>
    )
}

export default MovieResult;