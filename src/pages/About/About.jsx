import { Container } from "react-bootstrap"
import AboutContent from "../../components/AboutContent/AboutContent"

function About() {
  return (
    <Container className="d-flex justify-content-center" style={{ height: '100vh' }} >
      <AboutContent />
    </Container>
  )
}

export default About