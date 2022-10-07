
import './App.css';

// COMPONENTES PROPIOS
import Navegacion from './componentes/navegacion.js' //NAVBAR
import Presentacion from './componentes/presetacion.js' // PRESENTACION
import Portafolio from './componentes/portafolio.js' // PORTAFOLIO
import SobreMi from './componentes/sobreMi.js' // SOBRE MI
import Cv from './componentes/cv.js' // CURRICULUM
import Tecnologias from './componentes/tecnologias';

// COMPONENTES BOOTSTRAP
import Container from 'react-bootstrap/Container';



// APLICACION
function App() {
  return (
    <div id='home'>

      <Navegacion/>

    <div className='container'>
    <Container>

      <Presentacion/>

      <Portafolio/>

      <SobreMi/> 
      
      <Tecnologias/>

      <Cv/>

      </Container>

      </div>
    </div>
  );
}

export default App;
