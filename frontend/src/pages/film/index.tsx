import { useParams } from "react-router-dom"
import FilmTrailer from "../../components/FilmTrailer";

function Film(){

    const params = useParams();

    return(
        <FilmTrailer movieUuid={`${params.movieUuid}`} />
    )
}

export default Film;