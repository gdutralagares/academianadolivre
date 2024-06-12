import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Academia Nado Livre</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              possimus doloribus explicabo ipsa, amet perferendis?
            </p>
            <div className="no">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">(62) 981532838</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">academianadolivre@yahoo.com.br</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="modalidade">Modalidades</Link>
          <Link to="fotos">Fotos</Link>
          <Link to="faq">Faq</Link>
          <Link to="contato">Contato</Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
