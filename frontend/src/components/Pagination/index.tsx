import { MoviePage } from "../../types/movie";

type Props = {
    page: MoviePage;
}

function Pagination( {page} : Props){
    return(
        <h2 id="paginationButton">Botoes de navegacao</h2>)
}

export default Pagination;