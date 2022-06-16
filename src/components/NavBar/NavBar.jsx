import { Container, Nav, Navbar } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand className="fw-bold logo" role="button">J-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav className="m-auto gap-lg-3">
            <Nav.Link className="center-nav" href="#collection">Categories</Nav.Link>
            <Nav.Link className="center-nav" href="#about">About</Nav.Link>
            <Nav.Link className="center-nav" href="#jewell">Shop</Nav.Link>
            <Nav.Link className="center-nav" href="#form">Contact</Nav.Link>
          </Nav>
          <Nav className="flex-row justify-content-center gap-3">
            <Nav.Link href="#form"><FiSearch /></Nav.Link>
            <Nav.Link href="#jewell"><BsCart3 /></Nav.Link>
            <Nav.Link className="d-none d-lg-block"><GiHamburgerMenu /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
