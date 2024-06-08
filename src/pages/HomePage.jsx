import { Container, Row, Col } from "react-bootstrap";
import Capa from "../images/capa.png";
import { kelasTerbaru } from "../data";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6" className="col">
            <h1 className="mb-4">
              <span>Mergulhe</span> em uma jornada <br/> de <span>saúde</span> e <span>bem-estar</span>!
            </h1>
            <p className="mb-4">
            Bem-vindo à Academia Nado Livre, onde a saúde e o bem-estar fluem juntos! Nossa missão é proporcionar um ambiente acolhedor e motivador para que você possa alcançar seus objetivos, seja melhorar suas habilidades na água ou desfrutar dos benefícios de um exercício de baixo impacto. Vamos nadar e nos exercitar juntos rumo a uma vida mais saudável e feliz!
            </p>
            <button className="btn btn-outline-danger round-1"> Saiba mais</button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
          <img src={Capa} alt="hero-img" />
          </Col>
        </Row>
      </Container>
      </header>
      <div className="modalidade w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Modalidades</h1>
            <p className="text-center">Conheça as modalidades oferecidas pela Academiaa</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) =>{
              return(
                <Col key={kelas.id}>
                  <img src={kelas.image} alt="" />
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <div className="beneficios w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Benefícios</h1>
            <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
