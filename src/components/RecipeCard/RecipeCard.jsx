import { Card, Col, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function RecipeCard({ recipe, setCurrentRecipe }) {
  return (
    <Col md={3} className='d-flex align-items-stretch' >
      <Card className='text-center border border-light rounded' >
          <Nav.Link as={NavLink} to={`/${recipe._id}`}>
            <Card.Img variant="top" src={recipe.image} alt={recipe.title} onClick={() => setCurrentRecipe(recipe)} />
          </Nav.Link>
          <Card.Body className='align-content-end' >
              <Card.Text onClick={() => setCurrentRecipe(recipe)}>
                <Nav.Link as={NavLink} to={`/${recipe._id}`}>{recipe.title}</Nav.Link>
              </Card.Text>
          </Card.Body>
      </Card>
    </Col>
  )
}

export default RecipeCard