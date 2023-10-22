import lupa from '../../imagens/lupa.svg'
import './style.css'

function Barra(){
    return(
        <div id="divBusca">
            <input type="text" id="textoBusca" placeholder="Buscar..."/>
            <img src={lupa} id="busca" alt="Buscar"/>
        </div>
    )
}
export default Barra
