import './styles.css';

function InfoAlert(){

    return(
        <div className="alert"> 
            <div data-dismiss="alert"><button className="closebtn">x</button></div>
            <strong>Atenção!</strong> Caso o video não reproduza, recarregar a paginá para ativar o Player poderá ser necessário. Grato!
        </div>
    )
}

export default InfoAlert;