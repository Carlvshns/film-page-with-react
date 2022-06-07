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