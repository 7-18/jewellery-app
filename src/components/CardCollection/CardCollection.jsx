import { Button, Col, Container, Image, Row } from "react-bootstrap";

export const CardCollection = ({
  title,
  subtitle,
  description,
  image,
  reverse,
  gtshop,
}) => {
  return (
    <Container fluid className="p-lg-5 py-0" id="collection">
      {reverse === false ? (
        <Row className="flex-column-reverse flex-lg-row m-0 p-0 justify-content-evenly">
          <Col sm={5}>
            <Image src={image} fluid className="mt-5 mt-lg-0" />
          </Col>
          <Col sm={5} className="pe-lg-5 mx-lg-4 me-lg-5">
            <div>
              <h2
                style={{ fontSize: "48px", fontWeight: "700" }}
                className="py-lg-5 pb-4"
              >
                {title}
              </h2>
              <span className="fs-2">{subtitle}</span>
              <p className="mt-3 pe-lg-4">{description}</p>
              {gtshop ? (
                <Button variant="dark" className="px-lg-4 mt-3 text-uppercase">
                  {gtshop}
                </Button>
              ) : null}
            </div>
          </Col>
        </Row>
      ) : (
        <Row className="flex-column flex-lg-row m-0 p-0 justify-content-evenly">
          <Col sm={5}>
            <div>
              <h2
                style={{ fontSize: "48px", fontWeight: "700" }}
                className="py-5 pb-4"
              >
                {title}
              </h2>
              <span className="fs-2">{subtitle}</span>
              <p className="mt-3 pe-lg-4">{description}</p>
              {gtshop ? (
                <Button variant="dark" className="px-lg-4 mt-3 text-uppercase">
                  {gtshop}
                </Button>
              ) : null}
            </div>
          </Col>
          <Col sm={5}>
            <Image src={image} fluid className="mt-5 mt-lg-0" />
          </Col>
        </Row>
      )}
    </Container>
  );
};
