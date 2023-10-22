import './style.css'

function Olimpiadas() {
    return(
        <div className="olim">
            <div className="olim-botao"><strong>OLIMPÍADAS</strong></div>
            <div className="dropdown-olim">
                <a className="dropdown-item-o" href="https://www.fecap.br/">Olimpíadas 2024</a>
                <a className="dropdown-item-o" href="https://www.fecap.br/">Esportes olimpícos</a>
                <a className="dropdown-item-o" href="https://www.fecap.br/">Como funciona</a>
                <a className="dropdown-item-o" href="https://www.fecap.br/">Brasil nas Olimpíadas</a>
                <a className="dropdown-item-o" href="https://www.fecap.br/">Curiosidade</a>
            </div>
        </div>
    )
}

export default Olimpiadas

