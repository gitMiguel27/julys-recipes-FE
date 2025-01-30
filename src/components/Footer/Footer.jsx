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
          <h5>Contact</h5>
          <Nav variant="underline" activeKey="/home" as="ul" className="flex-column" gap={0} >
            <Nav.Item as="li">
              <Nav.Link as={NavLink} to='/' className="p-0" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" as={NavLink} to='/about' className="p-0" >About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" as={NavLink} to='/recipes' className="p-0" >Recipes</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3" as={NavLink} to='/form' className="p-0" >Form</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <Container className="px-0" style={{ maxWidth: '20vw' }}>
          <h5>Links</h5>
          <Nav as="ul" className="flex-column">
            <Nav.Item as="li">
              <Nav.Link href="https://www.linkedin.com/in/miguel-nazario/" target="_blank" className="px-0" >
                <img src={linkedin} alt="LinkedIn" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://github.com/gitMiguel27" target="_blank" className="px-0" >
                <img  src={github} alt="Github" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://gitmiguel27.github.io/portfolio/" target="_blank" className="px-0" >
                <img src={portfolio} alt="Portfolio" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Stack>
      <p className="text-center my-3">Copyright @ made by gitMiguel27</p>
    </Container>
  );
}

export default Footer;
