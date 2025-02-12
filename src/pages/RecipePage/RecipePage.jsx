import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './RecipePage.css'

function RecipePage({ currentRecipe, recipes, setRecipes }) {
    const navigate = useNavigate()
    const { t } = useTranslation()

    function handleDeleteRecipe() {
        deleteRecipe()

        const newRecipesArr = recipes.filter(recipe => recipe._id !== currentRecipe._id)
        setRecipes(newRecipesArr)
        navigate('/recipes')
    }

    async function deleteRecipe() {
        try {
            await fetch(`https://julys-recipes-be.onrender.com/api/recipes/${currentRecipe._id}`, {
                method: "DELETE",
            })
        } catch (error) {
            console.error({ error: error.message })
        }
    }

    return (
        <Container className='text-center my-5' style={{ minHeight: '200vh' }}>
            <Row>
                <Col className='d-flex justify-content-end my-auto' xs={12} >
                    <Button variant='danger' className='me-auto' onClick={() => navigate('/recipes')} >{t('backToRecipesButton')}</Button>
                    <Button variant='danger' className='me-3' onClick={() => navigate(`/update/${currentRecipe._id}`)}>{t('updateRecipeButton')}</Button>
                    <Button variant='danger' onClick={handleDeleteRecipe}>{t('deleteRecipeButton')}</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='my-3' >
                    <h2 >{currentRecipe.title}</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} className='mx-auto my-3' >
                    <Image className='recipe-page-image' src={currentRecipe.image} alt={currentRecipe.title} fluid rounded />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} className='mx-auto my-3' >
                    <h5>{t('ingredientsHeader')}</h5>
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
                    <h5>{t('cookingInstructionsHeader')}</h5>
                    <p>{currentRecipe.instructions}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipePage