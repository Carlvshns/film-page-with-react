import { MoviePage } from "../../types/movie";
import {ReactComponent as Arrow} from '../../assets/img/arrow.svg';
import './styles.css';
import * as C from './styled';

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination( {page, onChange} : Props){
    return(
        <C.PaginationContainer>
            <C.PaginationBox>
                <button className="pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)}>
                    <Arrow className="flip-horizontal" />
                </button>
                <C.PaginationPageNumbers id="pageNumbers">{`${page.number + 1} de ${page.totalPages}`}</C.PaginationPageNumbers>
                <button className="pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
                    <Arrow />
                </button>
            </C.PaginationBox>
        </C.PaginationContainer>
    );
}

export default Pagination;