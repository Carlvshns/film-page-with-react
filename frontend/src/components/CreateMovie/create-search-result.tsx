import axios from "axios";
import { useEffect, useState } from "react";
import { MoviePage } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";
import './styles.css';

type Props = {
    movieName: string;
}

function CreateSearchResult( {movieName} : Props){

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
        axios.get(`${BASE_URL}/movies/search/${movieName}?size=18&page=${pageNumber}&sort=name`).then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        });
    }, [movieName, pageNumber]);

    const deleteSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const movieId = (event.target as any).excludeId.value;
        const pass = (event.target as any).excludePass.value;

        axios.delete(`${BASE_URL}/movies/delete/${movieId}/${pass}`)
        .then(() => window.location.replace("/create"));
    }

    const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const searchBar = (event.target as any).pesquisaName.value;

        if(searchBar === ""){
            return window.location.reload;
        }
        else{
        return window.location.replace(`/create-search/${searchBar}`);
        }
    };
    
    return (
        <>
            <div className="divCreate">
            <form onSubmit={deleteSubmit}>
                <label htmlFor="excludeId"></label>
                <input name="excludeId" id="excludeId" className="createInput" placeholder="Identificador" required></input>

                <label htmlFor="excludePass"></label>
                <input type="password" name="excludePass" id="excludePass" className="createInput" placeholder="Senha" required></input>

                <button className="buttonCreate" type="submit" value="submit">Excluir</button>
            </form>
        </div>

        <div className="divCreate">
            <form onSubmit={searchSubmit}>
                <label htmlFor="pesquisaName"></label>
                <input name="pesquisaName" id="pesquisaName" className="createInput" placeholder="Pesquise um filme"></input>
                <button className="buttonCreate" type="submit" value="submit">Pesquisar</button>
            </form>
        </div>

        <div>
            <table className="table theTable">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col" className="coluna">Nome do Filme</th>
                  </tr>
                </thead>
            </table>
            {page.content.map(movie => (
                <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">{movie.id}</th>
                    <td className="coluna">{movie.name}</td>
                  </tr>
                </tbody>
              </table>
            ))}
        </div>
        </>
    )
}

export default CreateSearchResult;