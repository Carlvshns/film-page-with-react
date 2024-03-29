function Navbar() {

    const searchSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
   
        const searchBar = (event.target as any).input.value;

        if(searchBar === ""){
            return window.location.reload;
        }
        else{
        return window.location.replace(`/search/${searchBar}`);
        }
    };

    const quadrinhosSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/quadrinhos`);
    };

    const filmeDeAnimeSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/anime`);
    };

    const comediaSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/comedia`);
    };

    const aventuraSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/aventura`);
    };

    const suspenseSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/suspense`);
    };

    const ficcaoSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/ficcao`);
    };

    const romanceSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/romance`);
    };

    const acaoSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/acao`);
    };

    const terrorSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/terror`);
    };

    const desenhoSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/desenho`);
    };

    const historiaSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/historia`);
    };

    const crimeSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/crime`);
    };

    const inicioSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/`);
    };
    
    return(
        <header>
            <nav className="navbar navbar-expand-sm" id="theNavbar">
                <form className="form-inline"  id="theFormInNavbar" onSubmit={searchSubmit}>
                    <a href="https://github.com/Carlvshns" target="_blank" rel="noreferrer">
                        <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-bleu.png" alt="github-logo" id="gitLogo" />
                    </a>
                    <label htmlFor="input"></label>
                    <input className="form-control mr-sm-2" type="text" name="input" id="input" placeholder="Pesquise um filme..."/ >
                    <button className="btn btn-success" type="submit" value="submit" id="buttonSearch">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </form>
                <div className="dropdown">
                    <button className="dropbtn">Generos <i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                    <form onSubmit={quadrinhosSubmit}>
                        <button type="submit" value="submit" className="genreButton">Quadrinhos</button>
                    </form>
                    <form onSubmit={filmeDeAnimeSubmit}>
                        <button type="submit" value="submit" className="genreButton">Filmes de Anime</button>
                    </form>
		            <form onSubmit={comediaSubmit}>
                        <button type="submit" value="submit" className="genreButton">Comedia</button>
                    </form>
                    <form onSubmit={aventuraSubmit}>
                        <button type="submit" value="submit" className="genreButton">Aventura</button>
                    </form>
                    <form onSubmit={suspenseSubmit}>
                        <button type="submit" value="submit" className="genreButton">Suspense</button>
                    </form>
                    <form onSubmit={ficcaoSubmit}>
                        <button type="submit" value="submit" className="genreButton">Ficçao-Cientifica</button>
                    </form>
                    <form onSubmit={romanceSubmit}>
                        <button type="submit" value="submit" className="genreButton">Romance</button>
                    </form>
                    <form onSubmit={acaoSubmit}>
                        <button type="submit" value="submit" className="genreButton">Açao</button>
                    </form>
                    <form onSubmit={terrorSubmit}>
                        <button type="submit" value="submit" className="genreButton">Terror</button>
                    </form>
                    <form onSubmit={desenhoSubmit}>
                        <button type="submit" value="submit" className="genreButton">Desenhos</button>
                    </form>
                    <form onSubmit={historiaSubmit}>
                        <button type="submit" value="submit" className="genreButton">Historia</button>
                    </form>
                    <form onSubmit={crimeSubmit}>
                        <button type="submit" value="submit" className="genreButton">Crime</button>
                    </form>
                    </div>
                </div>
                <form onSubmit={inicioSubmit}>
                    <button type="submit" value="submit" id="inicioButton">Pagina Inicial</button>
                </form>
            </nav>
        </header>
    );
}

export default Navbar;