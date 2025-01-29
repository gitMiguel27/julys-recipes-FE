import React from 'react'
import { Container } from 'react-bootstrap'
import RecipeCard from '../../components/RecipeCard/RecipeCard'

function Recipes() {
  return (
    <Container style={{ height: '100vh' }} >
        <h1>This is the Recipes Page</h1>
        {/* <RecipeCard /> */}
  </Container>
  )
}

export default Recipes