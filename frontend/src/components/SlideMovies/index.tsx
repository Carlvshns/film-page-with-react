import { Link } from "react-router-dom";
import './styles.css';

function SlideMovies(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Link to={`/film/6af1e316-479f-4a1c-af7d-c5765f80edf9`} style={{ textDecoration: 'none'}}>
                        <img className="d-block" width="376px" height="140px" src="https://www.themoviedb.org/t/p/original/cgSx1Owixa4HGy2TV47izxO6Ezx.jpg" alt="First slide"/>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={`/film/e24a14cd-a456-44f0-b87c-26464f5ab86f`} style={{ textDecoration: 'none'}}>
                        <img className="d-block" width="376px" height="140px" src="https://www.themoviedb.org/t/p/original/qdAdwnlkNogUATybTncHAG0MT3i.jpg" alt="First slide"/>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={`/film/e0f5e392-283d-4316-8098-cb83a069d2d6`} style={{ textDecoration: 'none'}}>
                        <img className="d-block" width="376px" height="140px" src="https://www.themoviedb.org/t/p/original/qAB1FSkZ9Bj1BB8A3uKma9eQ5iD.jpg" alt="Third slide"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SlideMovies;