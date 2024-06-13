import { Container, Row, Col } from "react-bootstrap";
import { modalidades } from "../data";
const ModalidadePage = () => {
  return (
    <div className="modalidade-page">
      <div className="modalidade min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center"> Molidades</h1>
              <p className="text-center">
              Conheça as modalidades oferecidas pela Academia
              </p>
            </Col>
          </Row>
          <Row>
            {modalidades.map((data) => {
              return (
                <Col key={data.id}>
                  <img src={data.image} alt="" />
                  <h5 className="mb-3 mt-4 px-3">{data.title}</h5>
                  <p className="px-3">{data.text}</p>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
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

export default ModalidadePage;
