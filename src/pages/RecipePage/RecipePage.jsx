import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function RecipePage({ currentRecipe, recipes, setRecipes }) {
    const navigate = useNavigate()

    function handleDeleteRecipe() {
        console.log('clicked!')
        const newRecipesArr = recipes.filter(recipe => recipe._id !== currentRecipe._id)

        setRecipes(newRecipesArr)
        navigate('/recipes')
    }

    return (
        <Container className='text-center my-5' style={{ height: '200vh' }}>
            <Row>
                <Col className='d-flex justify-content-end my-auto' xs={12} >
                    <Button variant='danger' className='me-auto' onClick={() => navigate('/recipes')} >Back to Recipes</Button>
                    <Button variant='danger' className='me-3' onClick={() => navigate(`/update/${currentRecipe._id}`)}>Update</Button>
                    <Button variant='danger' onClick={handleDeleteRecipe}>Delete</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='my-3' >
                    <h2 >{currentRecipe.title}</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} className='mx-auto my-3' >
                    <Image src={currentRecipe.image} alt={currentRecipe.title} fluid rounded />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} className='mx-auto my-3' >
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
            </Row>
            <Row>
                <Col xs={12} md={10} className='mx-auto my-3' >
                    <h5>Cooking Instructions:</h5>
                    <p>{currentRecipe.instructions}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipePage