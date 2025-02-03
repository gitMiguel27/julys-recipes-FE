import { Container } from "react-bootstrap"
import Welcome from "../../components/Welcome/Welcome"

function Home() {
  return (
    <Container className="home" style={{ height: '200vh' }} >
      <Welcome />
    </Container>
  )
}

export default Home