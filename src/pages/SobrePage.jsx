import { Container, Row, Col } from "react-bootstrap";

const SobrePage = () => {
  return (
    <div className="sobre-page">
      <div className="sobre">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-2">Sobre</h1>
            </Col>
          </Row>
          <Row>
          <div className="about">
              <p>
                Fundada em 1993 por Millene Julia Dutra Lagares, a Academia Nado
                Livre tem sido um pilar de excelência no ensino de natação e
                hidroginástica. Com uma paixão pela natação e um compromisso
                inabalável com a saúde e bem-estar, Millene estabeleceu a
                academia com a visão de criar um espaço onde pessoas de todas as
                idades pudessem descobrir os benefícios e a alegria das
                atividades aquáticas.
              </p>
              <p>
                Na Academia Nado Livre, nossa missão é promover um estilo de
                vida saudável e ativo através de programas de natação e
                hidroginástica de alta qualidade. Acreditamos que a atividade
                física na água é uma forma essencial de melhorar a saúde física
                e mental, oferecendo benefícios únicos que vão além do exercício
                tradicional.
              </p><br />
              <h2 className="fw-bold">Nossos Serviços</h2>
              <p>
                Oferecemos uma ampla gama de programas para atender às
                necessidades de todos os nossos alunos, independentemente da
                idade ou nível de habilidade: 
                <li className="fw-bold">Aulas de Natação para Crianças e
                Adultos:</li> Desde iniciantes até nadadores avançados, nossos
                instrutores qualificados fornecem treinamento personalizado para
                ajudar cada aluno a alcançar seus objetivos aquáticos.
                <li className="fw-bold">Hidroginástica:</li>
                 Projetada para melhorar a resistência, força e
                flexibilidade, nossas aulas de hidroginástica são perfeitas para
                pessoas que buscam um treino de baixo impacto.
                <li className="fw-bold">Aulas para Bebês:</li> Introduza os pequenos ao mundo da
                natação com nossas aulas seguras e divertidas para bebês.
              </p>
              <br />
              <h2 className="fw-bold">Nossa Estrutura</h2>
              <p>
                Nossa academia está equipada com: 
                <li className="fw-bold">Piscinas Aquecidas: </li>Perfeitas
                para aulas durante todo o ano. 
                <li className="fw-bold">Ambiente Seguro e Aconchegante:</li>
                Garantindo conforto e segurança para todos os nossos alunos.
                <li className="fw-bold">Vestiários Modernos: </li>
                Completos com todas as comodidades
                necessárias.
              </p>
              </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SobrePage;
