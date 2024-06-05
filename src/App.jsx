import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";

function App() {
  return(
    <div className="App"> 
    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/faq" Component={FaqPage}/>
    </Routes>
    
    <FooterComponent/>
    </div>
  )
}
export default App
