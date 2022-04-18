import { Link } from "react-router-dom";

function SlideMovies(){
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <Link to={`/form/2`} style={{ textDecoration: 'none'}}>
                    <img className="d-block" width="400px" height="150px" src="https://trecobox.com.br/wp-content/uploads/2022/02/the-batman-poster.jpg" alt="First slide"/>
                </Link>
                </div>
                <div className="carousel-item">
                <Link to={`/form/11`} style={{ textDecoration: 'none'}}>
                    <img className="d-block" width="400px" height="150px" src="https://i.ytimg.com/vi/2fOzDiluIvI/maxresdefault.jpg" alt="Second slide"/>
                </Link>
                </div>
                <div className="carousel-item">
                <Link to={`/form/16`} style={{ textDecoration: 'none'}}>
                    <img className="d-block" width="400px" height="150px" src="https://mymovieviews.com/wp-content/uploads/2019/06/John-Wick-3.jpg" alt="Third slide"/>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default SlideMovies;