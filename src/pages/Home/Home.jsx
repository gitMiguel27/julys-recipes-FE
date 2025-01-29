import { Container } from "react-bootstrap"
import Welcome from "../../components/Welcome/Welcome"
import './Home.css'

function Home() {
  return (
    <Container className="home d-flex" style={{ height: '100vh' }} >
      <Welcome />
    </Container>
  )
}

export default Home