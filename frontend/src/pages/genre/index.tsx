import { useParams } from "react-router-dom";
import MovieByGenre from "../../components/MovieByGenre";

function Genre(){

    const params = useParams();

    return(
        <MovieByGenre movieGenre={params.movieGenre} />
    );
}

export default Genre;