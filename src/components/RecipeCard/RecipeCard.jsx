import { Card, Col } from 'react-bootstrap'

function RecipeCard({ recipe }) {
  return (
    <Col md={4} className='d-flex align-items-stretch' >
      <Card className='text-center border border-light rounded' >
          <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
          <Card.Body className='align-content-end' >
              <Card.Text className='mb-0'>{recipe.title}</Card.Text>
              <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
      </Card>
    </Col>
  )
}

export default RecipeCard