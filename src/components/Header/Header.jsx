import { Navbar, Container, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Header() {
  const { t } = useTranslation()
  const brand = t('brandNavbar', {
    brand: "July's Recipes"
  })

  return (
    <Navbar expand="md" sticky="top" data-bs-theme="dark" bg="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to='/'>{t('homeNavbar')}</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>{t('aboutNavbar')}</Nav.Link>
            <Nav.Link as={NavLink} to='/recipes'>{t('recipesNavbar')}</Nav.Link>
            <Nav.Link as={NavLink} to='/form' >{t('formNavbar')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;