import axios from "axios";
import { createRef, useEffect, useState } from "react";
import { Movie } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";

type Props = {
    movieId : string;
}

function FormCard( { movieId } : Props){

    const [movie, setMovie] = useState<Movie>();

    const inputRef = createRef;

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`).then( response => {
            setMovie(response.data)
        });
    }, [movieId]);

    return (
        <div>
            <h2>{movie?.name}</h2>
            <div>

            <iframe key={movie?.adress} src={movie?.adress} width="640" height="480" ref={inputRef} allow="autoplay">

            </iframe>
            </div>
        </div>
    )
}

export default FormCard;