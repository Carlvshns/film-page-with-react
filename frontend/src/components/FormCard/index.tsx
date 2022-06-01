import axios from "axios";
import React from "react";
import { createRef, useEffect, useState } from "react";
import { Movie, MoviePage } from "../../types/movie";
import { BASE_URL, FRONT_URL } from "../../utils/requests";
import MiniMovieCard from "../MiniMovieCard";
import './styles.css';

type Props = {
    movieUuid : string;
}

function FormCard( { movieUuid } : Props){

    const shareWhatsappSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.open(`https://wa.me/?text=${FRONT_URL}/form/${movie?.uuid}`, '_blank');
    };

    const shareFacebookSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.open(`https://www.facebook.com/sharer/sharer.php?u=${FRONT_URL}/form/${movie?.uuid}`, '_blank');
    };

    const [movie, setMovie] = useState<Movie>();

    const inputRef = createRef;

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/findByUuid/${movieUuid}`).then( response => {
            setMovie(response.data);
        });
    }, [movieUuid, movie?.adress]);

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

    console.log(setPageNumber+" "+page);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/findByGenre/${movie?.genre}?size=12&page=${pageNumber}&sort=id`).then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        });
    }, [movie?.genre, pageNumber]);

    useEffect(() => {
        var request = new XMLHttpRequest();
        request.open('GET', `${movie?.adress}`, true);
        request.responseType = 'blob';
        request.onload = function() {
            var reader = new FileReader();
            reader.readAsDataURL(request.response);
            reader.onload =  function(e){
                let blob = new Blob([request.response], {type: 'video/mp4'});
                var videoElement = document.getElementById('myvideo') as HTMLVideoElement
                videoElement.src = URL.createObjectURL(blob);
            }
        }
        request.send();
    }, [movie?.adress]);

    return (
        <>
        <div className="divForm">
        <hr />
            <h3 id="nameMovieInForm">{movie?.name}</h3>
        <div>
        <hr />
        <video ref={inputRef} id="myvideo" className="js-player">        
        </video>
        <hr />
        <div>
                <p id="synopsis"> Sinopse: &nbsp;{movie?.synopsis}</p>
        </div>
        <hr />
        </div>
        <div id="share">
        <form onSubmit={shareWhatsappSubmit}>
            <button id="whatsappButton" className="btn btn-success" type="submit" value="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                <span>&nbsp;Compartilhar no Whatsapp</span>
            </button>
        </ form>
        <form onSubmit={shareFacebookSubmit}>
            <button id="facebookButton" className="btn btn-primary" type="submit" value="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                <span>&nbsp;Compartilhar no Facebook</span>
            </button>
        </form>
        </div>
        </div>
        <h5 id="mini-genres">F I L ME S&nbsp;&nbsp;D O&nbsp;&nbsp;M E S M O &nbsp;&nbsp;G E N E R O</h5>
        <div className="listing-container">
            <div className="rows">
                {page.content.map(movie =>(
                <div key={movie.id}>
                    <MiniMovieCard movie={movie} />
                </div>
                )
                )}
            </div>
        </div>
        </>
    )
}

export default FormCard;