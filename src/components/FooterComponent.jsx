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
                  href="https://www.instagram.com/academianadolivre"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:academianadolivre@yahoo.com.br" target="_blank">
                  <i className="fa-regular fa-envelope"></i>
                </a>
                <a
                  href="https://www.facebook.com/academianadolivregoiania"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.google.com/maps/place/Academia+Nado+Livre/@-16.6495033,-49.2740054,15z/data=!4m6!3m5!1s0x935ef39b39cfa7f5:0x74394ee9b2e9d765!8m2!3d-16.6457665!4d-49.2735426!16s%2Fg%2F1tnpgjb7"
                  target="_blank"
                >
                  <i className="fa-solid fa-location-dot"></i>
                </a>
                <div className="telefone">
                  <a
                    href="https://api.whatsapp.com/send?phone=5562981532838"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <p> (62) 981532838</p>
                </div>
                <p>Goiania-Go</p>
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
