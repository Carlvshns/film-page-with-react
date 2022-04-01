import ListingSearch from "../ListingSearch";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const searchBar = (event.target as any).searchBar.value;

    return(
    <ListingSearch movieName={`${searchBar}`} />)
}

function Navbar() {
    
    return(
        <header>
            <nav className="navbar navbar-expand-sm" id="theNavbar">
                <form className="form-inline"  id="theFormInNavbar" onSubmit={ handleSubmit }>
                    <a href="https://github.com/Carlvshns" target="_blank" rel="noreferrer">
                    <img src="https://marcas-logos.net/wp-content/uploads/2020/03/GITHUB-LOGO.png" id="gitLogo" />
                    </a>
                    <label htmlFor="searchBar"></label>
                    <input className="form-control mr-sm-2" type="text" placeholder="Pesquise pelo nome de um anime..." id="searchBar"/ >
                    <button className="btn btn-success" type="submit" id="buttonSearch">Pesquisar</button>
                </form>
            </nav>
        </header>
    );
}

export default Navbar;