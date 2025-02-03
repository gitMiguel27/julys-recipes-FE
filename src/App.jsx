import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import RecipeForm from './pages/RecipeForm/RecipeForm'
import Recipes from './pages/Recipes/Recipes'
import RecipePage from './pages/RecipePage/RecipePage'
import UpdateRecipe from './pages/UpdateRecipe/UpdateRecipe'
import { Route, Routes } from 'react-router'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'

function App() {
  const [recipes, setRecipes] = useState([])
  const [currentRecipe, setCurrentRecipe] = useState()

  async function getRecipes() {
    try {
      let response = await fetch(`http://localhost:3000/api/recipes`)
      let recipeData = await response.json()

      setRecipes(recipeData)
    } catch (error) {
      console.error({ error: error.message })
    }
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <Container id='app' fluid className='px-0' >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<Recipes recipes={recipes} setCurrentRecipe={setCurrentRecipe} />} />
        <Route path='/form' element={<RecipeForm recipes={recipes} setRecipes={setRecipes} />} />
        <Route path='/:id' element={<RecipePage currentRecipe={currentRecipe} recipes={recipes} setRecipes={setRecipes} />} />
        <Route path='/update/:id' element={<UpdateRecipe currentRecipe={currentRecipe} />} />
        <Route path='*' element={<h1>Error: 404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
