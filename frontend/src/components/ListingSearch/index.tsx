import MovieResult from "../MovieResult";

function ListingSearch( movieName : any){
    return(
        <MovieResult movieName={`${movieName}`} />
    )
}

export default ListingSearch;