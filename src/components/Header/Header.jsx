import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="md" sticky="top" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">July&apos;s Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/recipes'>Recipes</Nav.Link>
            <Nav.Link as={NavLink} to='/form' >Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;