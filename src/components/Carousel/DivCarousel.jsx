import { Col, Container, Image, Row } from "react-bootstrap";
import carouselWoman from "../../assets/images/image12.png";
import { CardCarousel } from "./CardCarousel";
export const DivCarousel = () => {
  return (
    <Container fluid className="px-5 py-3 d-none d-lg-block" id="about">
      <Row>
        <Col sm={3}>
          <Image src={carouselWoman} fluid className="carouselWoman"/>
        </Col>
        <Col sm={7} className="mt-5 pt-5">
          <CardCarousel />
        </Col>
      </Row>
    </Container>
  );
};
