import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h3 className="fw-bold">Academia Nado Livre</h3>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus doloribus explicabo ipsa, amet perferendis?</p>
          <div className="no">
            <Link>
            <i className="fa-brands fa-whatsapp"></i>
            <p>(62) 981532838</p>
            </Link>
          </div>
          <div className="mail">
            <Link>
            <i className="fa-regular fa-envelope"></i>
            <p>academianadolivre@yahoo.com.br</p>
            </Link>
          </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
