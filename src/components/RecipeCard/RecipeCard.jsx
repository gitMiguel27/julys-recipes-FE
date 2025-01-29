import React from 'react'
import { Card } from 'react-bootstrap'

function RecipeCard({ card }) {
  return (
    <Card className='text-center border border-light rounded' style={{ width: '10vw' }}>
        <Card.Img variant="top" src={card.image} alt={card.title} />
        <Card.Body>
            <Card.Text>{card.title}</Card.Text>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
  )
}

export default RecipeCard