import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"
import ListadoBebidas from "./components/ListadoBebidas"
import ModalBebida from "./components/ModalBebida"



function App() {
  

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <div className="banner">
          <h1>RECETAS <span>FREE</span> APP</h1>
        <Container>
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
        </div>
      </BebidasProvider >
      
    </CategoriasProvider>
  )
}

export default App
