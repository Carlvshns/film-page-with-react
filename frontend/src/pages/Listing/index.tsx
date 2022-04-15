import axios from "axios";
import { useEffect, useState } from "react";
import InfoAlert from "../../components/InfoAlert";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { MoviePage } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";

function Listing(){

    const [pageNumber, setPageNumber] = useState(0);

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
        axios.get(`${BASE_URL}/movies?size=6&page=${pageNumber}&sort=name`).then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return(
        <>
        <Pagination page={page} onChange={handlePageChange} />
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
        <InfoAlert/>
        </>
    )
}

export default Listing;