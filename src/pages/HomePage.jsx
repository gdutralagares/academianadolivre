import { Container, Row, Col } from "react-bootstrap";
import Capa from "../images/capa3.png";
import { atividades, dataSwiper } from "../data";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import FaqComponent from "../components/FaqComponent";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6" className="col">
              <h1 className="mb-4">
                <span>Mergulhe</span> em uma jornada <br /> de{" "}
                <span>saúde</span> e <span>bem-estar</span>!
              </h1>
              <p className="mb-4">
                Bem-vindo à Academia Nado Livre, onde a saúde e o bem-estar
                fluem juntos! Nossa missão é proporcionar um ambiente acolhedor
                e motivador para que você possa alcançar seus objetivos, seja
                melhorar suas habilidades na água ou desfrutar dos benefícios de
                um exercício de baixo impacto. Vamos nadar e nos exercitar
                juntos rumo a uma vida mais saudável e feliz!
              </p>
              <button className="btn btn-outline-danger round-1" onClick={() => navigate("/sobre")}>
                Saiba mais
              </button>
              <div className="center">
              <div className="social">
                  <a
                    href="https://api.whatsapp.com/send?phone=5562981532838"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/academianadolivre"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/academianadolivregoiania"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
              </div>
            </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-0">
              <img src={Capa} alt="" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="modalidade w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Modalidades</h1>
              <p className="text-center">
                Conheça as modalidades oferecidas pela Academia
              </p>
            </Col>
          </Row>
          <Row>
            {atividades.map((data) => {
              return (
                <Col key={data.id}>
                  <img src={data.image} alt="" />
                  <h5 className="mb-3 mt-4 px-3">{data.title}</h5>
                  <p className="px-3">{data.text}</p>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p></p>
                    <button className="btn btn-outline-danger round-1">
                      {data.mais}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="fotos w-100 ">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Fotos</h1>
              <p className="text-center"></p>
            </Col>
          </Row>
          <Row>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
          {dataSwiper.map((data) => {
              return (
              <SwiperSlide key={data.id}>
                <div className="swiper-zoom-container">
                <img src={data.image} />
                </div>
                </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* SectionFAQ */}
      <FaqComponent/>
    </div>
  );
};

export default HomePage;
