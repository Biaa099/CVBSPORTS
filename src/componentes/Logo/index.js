import logo from '../../imagens/logo.svg'
import './style.css'

function Logo() {
    return(
/* SUBSTITUIR O LINK DA PÁGINA */
        <div className="logo">
            <a href="https://www.fecap.br/"><img 
            src={logo}
            alt=""
            className='logo-img'/>
            </a>
      </div>
    )
}

export default Logo