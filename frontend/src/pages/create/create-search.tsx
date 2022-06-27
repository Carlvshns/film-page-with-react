import { useParams } from "react-router-dom";
import CreateSearchResult from "../../components/CreateMovie/create-search-result";

function CreateSearch(){

    const params = useParams();

    return(
        <CreateSearchResult movieName={`${params.movieName}`} />
    )
}

export default CreateSearch;