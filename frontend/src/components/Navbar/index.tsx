function Navbar() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
   
        const searchBar = (event.target as any).input.value;

        return window.location.replace(`/search/${searchBar}`);
    };

    const superHeroiSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/super-heroi`);
    };

    const filmeDeAnimeSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/anime`);
    };

    const inicioSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/`);
    };
    
    return(
        <header>
            <nav className="navbar navbar-expand-sm" id="theNavbar">
                <form className="form-inline"  id="theFormInNavbar" onSubmit={handleSubmit}>
                    <a href="https://github.com/Carlvshns" target="_blank" rel="noreferrer">
                    <img src="https://marcas-logos.net/wp-content/uploads/2020/03/GITHUB-LOGO.png" alt="github-logo" id="gitLogo" />
                    </a>
                    <label htmlFor="input"></label>
                    <input className="form-control mr-sm-2" type="text" name="input" id="input" placeholder="Pesquise pelo nome de um anime..."/ >
                    <button className="btn btn-success" type="submit" value="submit" id="buttonSearch">Pesquisar</button>
                </form>
                <div className="dropdown">
                    <button className="dropbtn">Generos <i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                    <form onSubmit={superHeroiSubmit}>
                    <button className="btn btn-success" type="submit" value="submit" id="genreButton">Super-heroi</button>
                    </form>
                    <form onSubmit={filmeDeAnimeSubmit}>
                    <button className="btn btn-success" type="submit" value="submit" id="genreButton">Filmes de Anime</button>
                    </form>
                    </div>
                </div>
                <form onSubmit={inicioSubmit}>
                    <button className="btn btn-success" type="submit" value="submit" id="genreButton">Pagina Inicial</button>
                </form>
            </nav>
        </header>
    );
}

export default Navbar;