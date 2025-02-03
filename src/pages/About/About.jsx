import { Container } from "react-bootstrap"
import AboutContent from "../../components/AboutContent/AboutContent"

function About() {
  return (
    <Container className="d-flex" style={{ height: '200vh' }} >
      <AboutContent />
    </Container>
  )
}

export default About