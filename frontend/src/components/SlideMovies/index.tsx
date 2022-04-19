import { Link } from "react-router-dom";
import './styles.css';

function SlideMovies(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Link to={`/form/2`} style={{ textDecoration: 'none'}}>
                        <img className="d-block" width="376px" height="140px" src="https://trecobox.com.br/wp-content/uploads/2022/02/the-batman-poster.jpg" alt="First slide"/>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={`/form/3`} style={{ textDecoration: 'none'}}>
                        <img className="d-block" width="376px" height="140px" src="https://echoboomer.pt/wp-content/uploads/2018/07/dragonballsuperbroly-destaque-echoboomer.jpg" alt="First slide"/>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link to={`/form/11`} style={{ textDecoration: 'none'}}>
                        <img className="d-block" width="376px" height="140px" src="https://mymovieviews.com/wp-content/uploads/2019/06/John-Wick-3.jpg" alt="Third slide"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SlideMovies;