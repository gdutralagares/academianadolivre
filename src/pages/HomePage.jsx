import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../images/capa.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6" className="col">
            <h1 className="mb-4">
              <span>Mergulhe</span> em uma jornada <br/> de saúde, bem-estar e
              diversão!
            </h1>
            <p className="mb-4">
            Bem-vindo à Academia Nado Livre, onde a saúde e o bem-estar fluem juntos! Nossa missão é proporcionar um ambiente acolhedor e motivador para que você possa alcançar seus objetivos, seja melhorar suas habilidades na água ou desfrutar dos benefícios de um exercício de baixo impacto. Vamos nadar e nos exercitar juntos rumo a uma vida mais saudável e feliz!
            </p>
            <button className="btn btn-outline-danger round-1"> Saiba mais</button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
          <img src={HeroImage} alt="hero-img" />
          </Col>
        </Row>
      </Container>
      </header>
      <div className="modalidade w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
