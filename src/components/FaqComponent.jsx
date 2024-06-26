import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

const FaqComponent = () => {
  return (
    <div className="faq pt-4">
      <Container>
        <Row>
          <Col className="pergunta">
          <h1 className="text-center fw-bold mb-4"> Perguntas mais frequentes</h1>
          </Col>
        </Row>
        <Row className="p-3">
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Quais são os benefícios da natação para a saúde?</Accordion.Header>
        <Accordion.Body>
        A natação melhora a saúde cardiovascular, fortalece músculos, aumenta a flexibilidade, ajuda no controle do peso, reduz o estresse e melhora a capacidade pulmonar
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Como a natação ajuda no emagrecimento?</Accordion.Header>
        <Accordion.Body>
        A natação é um exercício de alta queima calórica que trabalha vários grupos musculares, o que ajuda a aumentar o metabolismo e queimar gordura. Além disso, a resistência da água contribui para um treino mais eficaz.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>A natação é um bom exercício para melhorar a postura?</Accordion.Header>
        <Accordion.Body>
        Sim, a natação fortalece os músculos centrais e das costas, ajudando a alinhar a coluna e melhorar a postura geral.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Quantas vezes por semana é recomendável que os bebês façam natação?</Accordion.Header>
        <Accordion.Body>
        Para obter os melhores benefícios, é recomendado que os bebês participem de aulas de natação uma a duas vezes por semana. Isso ajuda a criar uma rotina sem sobrecarregar o bebê.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>A natação pode ajudar na socialização dos bebês?</Accordion.Header>
        <Accordion.Body>
        Sim, a natação em grupo permite que os bebês interajam com outros bebês e adultos, o que pode estimular o desenvolvimento social e emocional.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Quem pode praticar hidroginástica?</Accordion.Header>
        <Accordion.Body>
        A hidroginástica é adequada para pessoas de todas as idades e níveis de condicionamento físico. É especialmente recomendada para idosos, pessoas com artrite, lesões ou condições que limitam atividades de alto impacto.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Quais são os benefícios da hidroginástica?</Accordion.Header>
        <Accordion.Body>
        A hidroginástica melhora a força muscular, a flexibilidade, a saúde cardiovascular, a coordenação e o equilíbrio. Ela também é benéfica para a redução do estresse e proporciona um exercício de baixo impacto nas articulações.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
 
        </Row>
      </Container>

    </div>
    
  );
}

export default FaqComponent;
