import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function RecipePage({ currentRecipe }) {
    const navigate = useNavigate()

  return (
    <Container className='d-flex text-center' style={{ height: '200vh' }}>
        <Row>
            <Col className='d-flex justify-content-end my-auto' xs={4} md={12} >
                <Button variant='danger' onClick={() => navigate(`/update/${currentRecipe._id}`)}>Update</Button>
                <Button variant='danger' >Delete</Button>
            </Col>
            <Col xs={8} md={12} >
                <h2 >{currentRecipe.title}</h2>
            </Col>
            <Col xs={12} >
                <Image src={currentRecipe.image} alt={currentRecipe.title} fluid rounded />
            </Col>
            <Col xs={12} >
                <h5>Ingredients:</h5>
                <ListGroup as='ol' numbered >
                    {
                        currentRecipe.ingredients.map(ingredient => {
                            return (
                                <ListGroup.Item as='li' key={ingredient} >{ingredient}</ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Col>
            <Col xs={12} >
                <h5>Cooking Instructions:</h5>
                <p>{currentRecipe.instructions}</p>
            </Col>
        </Row>
    </Container>
  )
}

export default RecipePage