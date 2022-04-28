function Navbar() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
   
        const searchBar = (event.target as any).input.value;

        if(searchBar === ""){
            return window.location.reload;
        }
        else{
        return window.location.replace(`/search/${searchBar}`);
        }
    };

    const superHeroiSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/super-heroi`);
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

    const sobrenaturalSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/sobrenatural`);
    };

    const desenhoSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        return window.location.replace(`/genre/desenho`);
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
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-bleu.png" alt="github-logo" id="gitLogo" />
                    </a>
                    <label htmlFor="input"></label>
                    <input className="form-control mr-sm-2" type="text" name="input" id="input" placeholder="Pesquise pelo nome de um filme..."/ >
                    <button className="btn btn-success" type="submit" value="submit" id="buttonSearch">Pesquisar</button>
                </form>
                <div className="dropdown">
                    <button className="dropbtn">Generos <i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content">
                    <form onSubmit={superHeroiSubmit}>
                        <button type="submit" value="submit" className="genreButton">Super-heroi</button>
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
                    <form onSubmit={sobrenaturalSubmit}>
                        <button type="submit" value="submit" className="genreButton">Sobrenatural</button>
                    </form>
                    <form onSubmit={desenhoSubmit}>
                        <button type="submit" value="submit" className="genreButton">Desenhos</button>
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