import axios from "axios";
import { useEffect, useState } from "react"
import { Movie } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";

type Props = {
    movieName : string;
}

function SearchResult( {movieName} : Props){

    const [movie, setMovie] = useState<Movie>();
    
    useEffect(() => {
        axios.get(`${BASE_URL}/movies/search/${movieName}`).then( response => {
            const data = response.data as Movie;
            setMovie(data);
        });
    }, [movieName])

    return (
        <h2>{movie?.name}</h2>
    )
}

export default SearchResult;