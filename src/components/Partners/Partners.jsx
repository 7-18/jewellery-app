import { Col, Container, Image, Row } from "react-bootstrap";
import planday from "../../assets/images/planday.png";
import umbraco from "../../assets/images/umbraco.png";
import pearlfisher from "../../assets/images/pearlfisher.png";
import brightpearl from "../../assets/images/brightpearl.png";

export const Partners = () => {
  return (
    <Container fluid className="text-center py-5">
      <span style={{ fontSize: "44px" }}>Trusted by leading companies</span>
      <Row className="mt-5 justify-content-center gap-lg-3 gap-5">
        <Col sm={2}>
          <Image src={planday} fluid />
        </Col>
        <Col sm={2}>
          <Image src={umbraco} fluid />
        </Col>
        <Col sm={2}>
          <Image src={pearlfisher} fluid />
        </Col>
        <Col sm={2}>
          <Image src={brightpearl} fluid />
        </Col>
        <Col sm={2}>
          <Image src={planday} fluid />
        </Col>
      </Row>
    </Container>
  );
};
