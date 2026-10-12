
import './App.css';
import Navegacion from './components/Navegacion';
import Portafolio from './components/Portafolio';
import Presentacion from './components/Presentacion';
import SobreMi from './components/SobreMi';
import Tecnologias from './components/Tecnologias';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <Navegacion />
      <main>
        <Presentacion />
        <Portafolio />
        <SobreMi />
        <Tecnologias />
        <Contacto />
      </main>
    </div>
  );
}

export default App;
