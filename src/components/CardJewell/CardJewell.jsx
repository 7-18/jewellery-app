import { Button, Col, Container, Image, Row } from "react-bootstrap";

export const CardJewell = ({ reverse, image, title, description, price }) => {
  return (
    <Container fluid className="py-5" id="jewell">
      {reverse === false ? (
        <Row className="flex-column-reverse flex-lg-row justify-content-evenly">
          <Col sm={6}>
            <Image src={image} fluid className="ring mt-5 mt-lg-0" />
          </Col>
          <Col sm={5} className="ps-lg-4 ms-lg-5">
            <div className="ms-lg-5 info">
              <h2 style={{ fontSize: "48px", fontWeight: "700" }}>{title}</h2>
              <p className="pt-3 pe-lg-5" style={{ fontSize: "14px" }}>
                {description}
              </p>
              <span className="fs-3">Size</span>
              <div className="d-flex gap-2">
                <span className="fs-5 px-3" role="button">
                  S
                </span>
                <span className="fs-5 px-3" role="button">
                  M
                </span>
                <span className="fs-5 px-3" role="button">
                  L
                </span>
              </div>
              <div className="d-flex gap-4 mt-lg-5 mt-3">
                <Button variant="dark" className="px-lg-4 text-uppercase">
                  Add to Cart
                </Button>
                <h3 className="px-3 fs-2" style={{ fontWeight: "900" }}>
                  {price}
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Row className="flex-column flex-lg-row justify-content-evenly">
          <Col sm={6} className="pe-lg-4 me-lg-5">
            <div className="me-lg-5 ms-lg-5 info">
              <h2 style={{ fontSize: "48px", fontWeight: "700" }}>{title}</h2>
              <p className="pt-3 pe-lg-5" style={{ fontSize: "14px" }}>
                {description}
              </p>
              <span className="fs-3">Size</span>
              <div className="d-flex gap-2">
                <span className="fs-5 px-3" role="button">
                  S
                </span>
                <span className="fs-5 px-3" role="button">
                  M
                </span>
                <span className="fs-5 px-3" role="button">
                  L
                </span>
              </div>
              <div className="d-flex gap-4 mt-lg-5 mt-3">
                <Button variant="dark" className="px-lg-4 text-uppercase">
                  Add to Cart
                </Button>
                <h3 className="px-3 fs-2" style={{ fontWeight: "900" }}>
                  {price}
                </h3>
              </div>
            </div>
          </Col>
          <Col sm={5} className="ms-lg-5">
            <Image src={image} fluid className="ring mt-5 mt-lg-0" />
          </Col>
        </Row>
      )}
    </Container>
  );
};
