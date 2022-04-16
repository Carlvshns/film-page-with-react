import './styles.css';

function InfoAlert(){

    return(
        <div className="alert"> 
            <div data-dismiss="alert"><button className="closebtn">x</button></div>
            <strong>Atenção!</strong> Nós não hospedamos videos em nossos servidores(ainda), se ao dar 'Play' outras abas se abrirem, feche-a e tente dar 'Play' novamente.
        </div>
    )
}

export default InfoAlert;