import { Container, Row, Col } from "react-bootstrap";
import { fotos } from "../data";

const FotosPage = () => {
  return (
    <div className="fotos-page">
      <div className="fotos pt-4">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Fotos</h1>
              {/* <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, ea.
              </p> */}
            </Col>
          </Row>
          <Row className="pic row-cols-lg-3 row-cols-1">
            {fotos.map((data) => {
              return (
                <Col key={data.id}>
                  <div>
                    <img src={data.image} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FotosPage;
