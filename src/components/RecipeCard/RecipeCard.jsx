import React from 'react'
import { Card } from 'react-bootstrap'

function RecipeCard({ card }) {
  return (
    <Card className='bg-dark text-white text-center border border-light rounded mx-1' style={{ width: '10vw' }}>
        <Card.Img variant="top" src={card.image} alt={card.title} />
        <Card.Body>
            <Card.Text>{card.title}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default RecipeCard