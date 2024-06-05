import {Navbar, Container, Nav} from "react-bootstrap";
import {navLinks} from "../data/index";

const NavbarComponent =() =>{
  return (
    <div>    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {navLinks.map((link) => {
            return(
              <div key={link.id}>
                   <Nav.Link href="#home">Início</Nav.Link>
              </div>
            );
          })}
          <Nav.Link href="#link">Modalidades</Nav.Link>
          <Nav.Link href="#link">Benefícios</Nav.Link>
          <Nav.Link href="#link">Valores</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
          <Nav.Link href="#link">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}
export default NavbarComponent;