import { Card, Col, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './RecipeCard.css'

function RecipeCard({ recipe, setCurrentRecipe }) {
  return (
    <Col xs={8} md={6} lg={3} className='mx-auto' >
      <Nav.Link as={NavLink} to={`/${recipe._id}`}>
        <Card className='text-center border border-dark rounded my-3' onClick={() => setCurrentRecipe(recipe)} >
            <Container className='recipe-card px-0'>
              <Card.Img className='recipe-card-image' variant="top" src={recipe.image} alt={recipe.title} />
              <Card.ImgOverlay className='overlay'></Card.ImgOverlay>
            </Container>
            <Card.Body className='recipe-card-title align-content-end' >
                <Card.Text>{recipe.title}</Card.Text>
            </Card.Body>
        </Card>
      </Nav.Link>
    </Col>
  )
}

export default RecipeCard