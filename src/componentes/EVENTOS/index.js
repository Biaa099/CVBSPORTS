import './style.css'

function Eventos(){
    return(
        <div className="eventos">
            <div className="eventos-botao"><strong>EVENTOS</strong></div>
                <div className="dropdown-eventos">
                    <a className="dropdown-item-e" href="https://www.fecap.br/">Brasileirão</a>
                    <a className="dropdown-item-e" href="https://www.fecap.br/">Libertadores</a>
                    <a className="dropdown-item-e" href="https://www.fecap.br/">Copa do Brasil</a>
                    <a className="dropdown-item-e" href="https://www.fecap.br/">NFL</a>
                    <a className="dropdown-item-e" href="https://www.fecap.br/">NBA</a>
                    <a className="dropdown-item-e" href="https://www.fecap.br/">Tênis</a>
                    <a className="dropdown-item-e" href="https://www.fecap.br/">Outros</a>
                </div> 
        </div>
    )
}

export default Eventos