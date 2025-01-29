import React from 'react'
import { Container } from 'react-bootstrap'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

function Recipes({ recipes }) {
  return (
    <Container style={{ height: '100vh' }} >
        <h1>This is the Recipes Page</h1>
        <Container>
          {/* {
            recipes.map(recipe => {
              return (
                <RecipeCard recipe={recipe} key={recipe[_id]} />
              )
            })
          } */}
        </Container>
  </Container>
  )
}

export default Recipes