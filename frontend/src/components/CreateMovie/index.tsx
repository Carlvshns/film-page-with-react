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
        const uuid = (event.target as any).createUuid.value;
        
        const pass = (event.target as any).createPass.value; 

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: `movies/create/${pass}`,
            data: {
                name: name,
                image: image,
                adress: adress,
                synopsis: synopsis,
                genre: genre,
                uuid: uuid
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

    const deleteSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const movieId = (event.target as any).excludeId.value;
        const pass = (event.target as any).excludePass.value;

        axios.delete(`${BASE_URL}/movies/delete/${movieId}/${pass}`)
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

                    <label htmlFor="createUuid"></label>
                    <input name="createUuid" id="createUuid" className="createInput" placeholder="Uuid" required></input>

                    <label htmlFor="createPass"></label>
                    <input type="password" name="createPass" id="createPass" className="createInput" placeholder="Senha" required></input>

                <button className="buttonSave" type="submit" value="submit">Adicionar</button>
            </form>
        </div>

        <div className="divCreate">
            <form onSubmit={deleteSubmit}>
                <label htmlFor="excludeId"></label>
                <input name="excludeId" id="excludeId" className="createInput" placeholder="Identificador" required></input>

                <label htmlFor="excludePass"></label>
                <input type="password" name="excludePass" id="excludePass" className="createInput" placeholder="Senha" required></input>

                <button className="buttonSave" type="submit" value="submit">Excluir</button>
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

export default CreateMovie;