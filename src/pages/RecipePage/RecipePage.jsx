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
        <Container className='d-flex text-center' style={{ height: '200vh' }}>
            <Row>
                <Col className='d-flex justify-content-end my-auto' xs={12} >
                    <Button variant='danger' className='me-auto' onClick={() => navigate('/recipes')} >Back to Recipes</Button>
                    <Button variant='danger' className='me-3' onClick={() => navigate(`/update/${currentRecipe._id}`)}>Update</Button>
                    <Button variant='danger' onClick={handleDeleteRecipe}>Delete</Button>
                </Col>
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
                    <h5>Cooking Instructions:</h5>
                    <p>{currentRecipe.instructions}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipePage