import { Col, Container, Image, Row } from "react-bootstrap";
import gold_ring from "../../assets/images/gold-ring-with-shiny-diamond-stone-it.png";
import vertical_ring from "../../assets/images/Rectangle 4.png";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Main = () => {
  return (
    <Container fluid>
      <SocialMedia />
      <Row>
        <Col sm={6}>
          <Image src={gold_ring} fluid className="ring" />
        </Col>
        <Col sm={4} className="pt-lg-5 mt-lg-4 ps-lg-4 ms-lg-3">
          <h3 style={{ fontSize: "34px" }}>Our Story</h3>
          <p>
            modern jewelry is made of gold, silver, or platinum, often with
            precious or semiprecious stones, it evolved from shells, animal
            teeth, and other items used as body decoration in prehistoric times.
          </p>
        </Col>
      </Row>
      <div className="explore">
        <a target="_blank" href="https://www.partridgejewellers.com/">
          Explore
        </a>
      </div>
      <Row>
        <Col sm={6}>
          <h1 className="ms-lg-4 text-center text-lg-start mt-3 mt-lg-0">
            Jewelery tells a great story
          </h1>
          <Row className="ms-lg-4 gap-3 mt-5">
            <Col sm={5}>
              <h3>Gold</h3>
              <p>Her provision acuteness had two why intention.</p>
            </Col>
            <Col sm={5}>
              <h3>SILVER</h3>
              <p>Her provision acuteness had two why intention.</p>
            </Col>
          </Row>
        </Col>
        <Col sm={6}>
          <Image
            src={vertical_ring}
            fluid
            className="ring vertical-ring"
            style={{ marginTop: "-200px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
