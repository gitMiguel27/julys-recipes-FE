import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" sticky="top" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#home">July&apos;s Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#recipe/submit">Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;