import Logo from './componentes/Logo'
import Barra from './componentes/BarraPesquisa'
import Carta from './componentes/Carta'
import Esportes from './componentes/ESPORTES'
import Eventos from './componentes/EVENTOS'
import Olimpiadas from './componentes/OLIMPIADAS'
import News from './componentes/NEWSLETTER'
import Seta from './componentes/SetaFooter'





function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo></Logo>
       <Barra></Barra>
      </header>
      <body>
        <div id="barranavegacao"> 
        <Esportes></Esportes>
        <Eventos></Eventos>
        <Olimpiadas></Olimpiadas>
        <News></News>
        </div>    
      </body>
      <footer>
        <h2>ESSE É O FOOTER</h2>
        <p>EU FIZ SÓ PARA MARCAR A ESTRUTURA</p>
        <p>FINGI QUE ISSO É UM LINK</p>
        <p>OUTRO LINK IMAGINARIO</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <Seta></Seta>
      </footer>
    </div>
  );
}

export default App;
