import { Container } from 'react-bootstrap'

function RecipePage({ currentRecipe }) {
  return (
    <Container style={{ height: '100vh' }}>
        <h1>{currentRecipe.title}</h1>
    </Container>
  )
}

export default RecipePage