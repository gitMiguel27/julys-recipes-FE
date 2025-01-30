import { Container, Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap'

function RecipePage({ currentRecipe }) {
  return (
    <Container className='d-flex text-center' style={{ height: '200vh' }}>
        <Row>
            <Col xs={12} >
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
                <Image src={currentRecipe.image} alt={currentRecipe.title} fluid rounded />
            </Col>
        </Row>
    </Container>
  )
}

export default RecipePage