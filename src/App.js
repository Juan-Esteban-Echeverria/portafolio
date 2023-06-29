
import './App.css';

// COMPONENTES PROPIOS
import Navegacion from './components/Navegacion' //NAVBAR
import Portafolio from './components/Portafolio';
import Presentacion from './components/Presentacion'; // PRESENTACION

// COMPONENTES BOOTSTRAP
import Container from 'react-bootstrap/esm/Container';
import SobreMi from './components/SobreMi';
import Tecnologias from './components/Tecnologias';
import Nav from './components/Nav';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <Navegacion/>

      <Nav/>

      <Container>
        <Presentacion/>
        <Portafolio/>
        <SobreMi/>
        <Tecnologias/>
        <Contacto/>
      </Container>


    </div>
  );
}

export default App;
