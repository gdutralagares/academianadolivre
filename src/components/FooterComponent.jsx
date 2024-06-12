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
                <Link>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-regular fa-envelope"></i>
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
