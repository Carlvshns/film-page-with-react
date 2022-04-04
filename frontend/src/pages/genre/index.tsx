import { useParams } from "react-router-dom";

function Genre(){

    const params = useParams();

    return(
        <h3>{params}</h3>
    );
}

export default Genre;