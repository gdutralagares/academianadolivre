import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo-removed.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <img src={Logo} alt="" className="logo" />
            <p className="desc">A mais de 30 anos promovendo a saúde!</p>
            <div className="no">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">(62) 981532838</p>
              </Link>
            </div>
            <div className="social">
              <div className="mail">
                <a
                  href="https://www.instagram.com/academianadolivre"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:academianadolivre@yahoo.com.br"                   target="_blank">
                <i className="fa-regular fa-envelope"></i></a>
                <a href= "https://www.facebook.com/academianadolivregoiania" target="_blank">
                <i className="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3"> &copy; Copyright {new Date().getFullYear()} by Gabriel Lagares</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
