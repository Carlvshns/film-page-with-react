import axios from "axios";
import { useEffect, useState } from "react"
import { MoviePage } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";

type Props = {
    movieName : string;
}

function SearchResult( {movieName} : Props){

    const [pageNumber, setPageNumber] = useState(0);

    console.log(setPageNumber.toString);

    const[page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });
    
    useEffect(() => {
        axios.get(`${BASE_URL}/movies/search/${movieName}?size=4&page=${pageNumber}&sort=name`).then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        });
    }, [movieName, pageNumber]);

    return (
        <>

        <Pagination page={page} />
        <div className="listing-container">
            <div className="rows">
                {page.content.map(movie =>(
                <div key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
                )
                )}
            </div>
        </div>
        </>
    )
}

export default SearchResult;