import { Card } from 'react-bootstrap'

function RecipeCard({ recipe }) {
  return (
    <Card className='text-center border border-light rounded' style={{ width: '10vw' }}>
        <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
        <Card.Body>
            <Card.Text>{recipe.title}</Card.Text>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
  )
}

export default RecipeCard