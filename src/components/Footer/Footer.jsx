import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import github from "../../icons/github.svg";
import portfolio from "../../icons/portfolio.svg";
import linkedin from "../../icons/linkedin.svg";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LangaugeSelector/LanguageSelector";
import './Footer.css'

function Footer() {
  const { t } = useTranslation()

  return (
    <Container className="px-0">
      <hr/>
      <Row >
        <Col xs={12} md={4} className="mb-2 text-center text-md-start" >
          <Container className="px-0">
            <h5>{t('footerLinksHeading')}</h5>
            <Nav
              variant="underline"
              activeKey="/"
              as="ul"
              className="flex-column align-items-center align-items-md-start"
              gap={0}
            >
              <Nav.Item as="li" style={{ width: 'max-content' }} >
                <Nav.Link as={NavLink} to="/" className="link p-0" >
                  {t('homeNavbar')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ width: 'max-content' }} >
                <Nav.Link
                  eventKey="link-1"
                  as={NavLink}
                  to="/about"
                  className="link p-0"
                >
                  {t('aboutNavbar')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ width: 'max-content' }} >
                <Nav.Link
                  eventKey="link-2"
                  as={NavLink}
                  to="/recipes"
                  className="link p-0"
                >
                  {t('recipesNavbar')}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ width: 'max-content' }} >
                <Nav.Link
                  eventKey="link-3"
                  as={NavLink}
                  to="/form"
                  className="link p-0"
                >
                  {t('formNavbar')}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Col>
        <Col xs={12} md={4} className="mb-2 text-center text-md-start" >
          <Container className="px-0">
            <h5>{t('footerContactHeading')}</h5>
            <Nav as="ul" className="flex-column align-items-center align-items-md-start">
              <Nav.Item as="li">
                <Nav.Link
                  href="https://www.linkedin.com/in/miguel-nazario/"
                  target="_blank"
                  className="px-0"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="https://github.com/gitMiguel27"
                  target="_blank"
                  className="px-0"
                >
                  <img src={github} alt="Github" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="https://gitmiguel27.github.io/portfolio/"
                  target="_blank"
                  className="px-0"
                >
                  <img src={portfolio} alt="Portfolio" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Col>
        <LanguageSelector />
      </Row>
      <p className="text-center my-3">{t('footerCopyright')}</p>
    </Container>
  );
}

export default Footer;
