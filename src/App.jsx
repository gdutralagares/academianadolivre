import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import ContatoPage from "./pages/ContatoPage";
import ModalidadePage from "./pages/ModalidadePage";
import FotosPage from "./pages/FotosPage";

function App() {
  return(
    <div className="App"> 
    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/modalidade" Component={ModalidadePage}/>
      <Route path="/fotos" Component={FotosPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/contato" Component={ContatoPage}/>
    </Routes>
    
    <FooterComponent/>
    </div>
  )
}
export default App
