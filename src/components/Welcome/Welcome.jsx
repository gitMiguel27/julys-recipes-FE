import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()

  return (
    <Container className='my-lg-auto'>
        <h1>Welcome to July&apos;s Recipes</h1>
        <h3>Dishes inspired by my mom<br />Authentically, Peruvian</h3>
        <Button variant='danger' onClick={() => navigate('/recipes')} >View Recipes</Button>
    </Container>
  )
}

export default Welcome