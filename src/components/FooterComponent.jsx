import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo-removed.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Contato</h1>
            <div className="center">
              <div className="social">
                  <a
                    href="https://api.whatsapp.com/send?phone=5562981532838"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/academianadolivre"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="mailto:academianadolivre@yahoo.com.br"
                    target="_blank"
                  >
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/academianadolivregoiania"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <p>(62) 3210-4965</p>
              </div>
            </div>
            <div className="logocenter">
            <img src={Logo} alt="" className="logo" />
            <p className="desc">A mais de 30 anos promovendo a saúde!</p>
            </div>
          </Col>
        </Row>
        <Row className="copy">
          <Col>
            <p className="text-center px-md-0 px-3 mb-2">
              {" "}
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Gabriel Lagares</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
