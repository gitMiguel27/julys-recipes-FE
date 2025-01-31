import { Container, Row } from 'react-bootstrap'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

function Recipes({ recipes, setCurrentRecipe }) {
  return (
    <Container style={{ minHeight: '100vh', height: 'auto' }} >
        <Container className='mt-5 px-0' >
          <Row>
              {
                recipes.map(recipe => {
                  return (
                    <RecipeCard recipe={recipe} key={recipe.title} setCurrentRecipe={setCurrentRecipe} />
                  )
                })
              }
          </Row>
        </Container>
  </Container>
  )
}

export default Recipes