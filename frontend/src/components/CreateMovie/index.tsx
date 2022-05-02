import axios, { AxiosRequestConfig } from "axios";
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

    return(
        <div className="divCreate">
        <form onSubmit={createSubmit}>
            <label htmlFor="createName"></label>
            <input name="createName" id="createName" placeholder="Titulo do filme" required></input>

            <label htmlFor="createImage"></label>
            <input name="createImage" id="createImage" placeholder="URL da imagem" required></input>

            <label htmlFor="createadress"></label>
            <input name="createAdress" id="createAdress" placeholder="URL do video" required></input>

            <label htmlFor="createSynopsis"></label>
            <input name="createSynopsis" id="createSynopsis" placeholder="Sinopse" required></input>

            <label htmlFor="createGenre"></label>
            <input name="createGenre" id="createGenre" placeholder="Genero" required></input>

            <button type="submit" value="submit">Salvar</button>
        </form>
        </div>
    )
}

export default CreateMovie;