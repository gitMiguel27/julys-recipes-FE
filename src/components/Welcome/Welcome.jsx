import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'

function Welcome() {
  const navigate = useNavigate()

  return (
    <Container className='welcome-container d-flex flex-column justify-content-lg-center' style={{ height: '100vh' }}>
        <h1>Welcome to July&apos;s Recipes</h1>
        <h3>Dishes inspired by my mom<br />Authentically, Peruvian</h3>
        <Button variant='danger' style={{ width: 'max-content' }} onClick={() => navigate('/recipes')} >View Recipes</Button>
    </Container>
  )
}

export default Welcome