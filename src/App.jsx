import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import ContatoPage from "./pages/ContatoPage";
import ModalidadePage from "./pages/ModalidadePage";
import BeneficiosPage from "./pages/BeneficiosPage";

function App() {
  return(
    <div className="App"> 
    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/modalidade" Component={ModalidadePage}/>
      <Route path="/beneficios" Component={BeneficiosPage}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/contato" Component={ContatoPage}/>
    </Routes>
    
    {/* <FooterComponent/> */}
    </div>
  )
}
export default App
