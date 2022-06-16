import { Col, Container, Row } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <footer>
      <Container className="px-5 py-3 mt-lg-5 pt-lg-5">
        <Row className="gap-5 gap-lg-0">
          <Col sm={3}>
            <div className="nav-footer d-flex flex-column gap-2">
              <h6 className="fw-bold fs-5 mb-lg-4 mb-2">Product</h6>
              <a href="#">Email Row</a>
              <a href="#">Free Tools</a>
              <a href="#">Agents</a>
              <a href="#">Blog</a>
            </div>
          </Col>
          <Col sm={3}>
            <div className="nav-footer d-flex flex-column gap-2">
              <h6 className="fw-bold fs-5 mb-lg-4 mb-2">Resources</h6>
              <a href="#">Our Agents</a>
              <a href="#">Member Stories</a>
              <a href="#">Video</a>
              <a href="#">Free trial</a>
            </div>
          </Col>
          <Col sm={3}>
            <div className="nav-footer d-flex flex-column gap-2">
              <h6 className="fw-bold fs-5 mb-lg-4 mb-2">Company</h6>
              <a href="#">Partnerships</a>
              <a href="#">Terms of use</a>
              <a href="#">Privacy</a>
              <a href="#">Sitemap</a>
            </div>
          </Col>
          <Col sm={3}>
            <h6 className="fw-bold fs-5 mb-lg-4 mb-2">Get in touch</h6>
            <p style={{ color: "#8e8e8e" }}>
              You’ll find your next. Marketing value you prefer.
            </p>
            <div className="d-flex flex-row gap-2 fs-3 mt-2 mt-lg-5 footer-icons">
              <GrFacebook role="button" />
              <FaTwitterSquare role="button" />
              <BsLinkedin role="button" />
            </div>
          </Col>
        </Row>
      </Container>
      <Copyright />
    </footer>
  );
};
