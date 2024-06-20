import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo-removed.png";


const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <div>
      <Navbar  expanded={expanded} expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <a href="/"><img src={Logo} alt="" className="logo" /></a>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
          <div className="menu">
          <Navbar.Collapse onClick={() => setExpanded(false)} id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarComponent;
