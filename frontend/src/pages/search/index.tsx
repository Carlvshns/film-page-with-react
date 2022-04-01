import { useParams } from "react-router-dom";
import SearchResult from "../../components/SearchResult";

function Search(){

    const params = useParams();
    
    return(
        <SearchResult movieName={`${params.movieName}`} />
    )
}

export default Search;