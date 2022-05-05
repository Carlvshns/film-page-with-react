import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { MoviePage } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";
import './styles.css';

function CreateMovie () {

    const createSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        const name = (event.target as any).createName.value;
        const image = (event.target as any).createImage.value;
        const adress = (event.target as any).createAdress.value;
        const synopsis = (event.target as any).createSynopsis.value;
        const genre = (event.target as any).createGenre.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: 'movies/create',
            data: {
                name: name,
                image: image,
                adress: adress,
                synopsis: synopsis,
                genre: genre
            }
        }

        axios(config).then(response => {
            window.location.replace("/create");
        })
    }

    const [pageNumber, setPageNumber] = useState(0);

    console.log(setPageNumber);

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
        axios.get(`${BASE_URL}/movies?size=18&page=${pageNumber}&sort=id`).then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        });
    }, [pageNumber]);

    const deleteSubmit = (movieId: number) => {

        axios.delete(`${BASE_URL}/movies/delete/${movieId}`)
        .then(() => window.location.replace("/create"));
    }

    return(
        <>
        <div className="divCreate">
        <form onSubmit={createSubmit}>
            <label htmlFor="createName"></label>
            <input name="createName" id="createName" className="createInput" placeholder="Titulo do filme" required></input>

            <label htmlFor="createImage"></label>
            <input name="createImage" id="createImage" className="createInput" placeholder="URL da imagem" required></input>

            <label htmlFor="createadress"></label>
            <input name="createAdress" id="createAdress" className="createInput" placeholder="URL do video" required></input>

            <label htmlFor="createSynopsis"></label>
            <input name="createSynopsis" id="createSynopsis" className="createInput" placeholder="Sinopse" required></input>

            <label htmlFor="createGenre"></label>
            <input name="createGenre" id="createGenre" className="createInput" placeholder="Genero" required></input>

            <button className="buttonSave" type="submit" value="submit">Adicionar</button>
        </form>
        </div>

        <div>
            <table className="table theTable">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col" className="coluna">Nome do Filme</th>
                    <th scope="col">Excluir</th>
                  </tr>
                </thead>
            </table>
            {page.content.map(movie => (
                <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">{movie.id}</th>
                    <td className="coluna">{movie.name}</td>
                    <td><button className="buttonDelete" onClick={() => deleteSubmit(movie.id)}>X</button></td>
                  </tr>
                </tbody>
              </table>
            ))}
        </div>
        </>
    )
}

export default CreateMovie;