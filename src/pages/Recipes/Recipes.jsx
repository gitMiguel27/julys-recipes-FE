import { Col, Container, Row } from 'react-bootstrap'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import { useTranslation } from 'react-i18next'

function Recipes({ recipes, setCurrentRecipe }) {
  const { t } = useTranslation()

  return (
    <Container style={{ minHeight: '200vh', height: 'auto' }} >
        <Container className='mt-5 px-0' >
          <Row className='text-center'>
            <Col xs={12} >
              <h3>{t('recipesPageHeader')}</h3>
            </Col>
          </Row>
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