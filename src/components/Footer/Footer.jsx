import React from "react";
import { Container, Stack, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import github from '../../icons/github.svg'
import portfolio from '../../icons/portfolio.svg'
import linkedin from '../../icons/linkedin.svg'

function Footer() {
  return (
    <Container fluid className="px-0" >
      <Stack direction="horizontal" gap={3}>
        <Container className="px-0" style={{ maxWidth: '20vw' }}>
          <h3>Contact</h3>
          <Nav variant="underline" activeKey="/home" as="ul" className="flex-column">
            <Nav.Item as="li">
              <Nav.Link as={NavLink} to='/home' >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" as={NavLink} to='/about' >About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" as={NavLink} to='/form' >Form</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <Container className="px-0" style={{ maxWidth: '20vw' }}>
          <h3>Links</h3>
          <Nav as="ul" className="flex-column">
            <Nav.Item as="li">
              <Nav.Link href="https://www.linkedin.com/in/miguel-nazario/" target="_blank" >
                <img src={linkedin} alt="LinkedIn" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://github.com/gitMiguel27" target="_blank" >
                <img  src={github} alt="Github" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://gitmiguel27.github.io/portfolio/" target="_blank" >
                <img src={portfolio} alt="Portfolio" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Stack>
    </Container>
  );
}

export default Footer;
