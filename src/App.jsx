import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import RecipeForm from './pages/RecipeForm/RecipeForm'
import Recipes from './pages/Recipes/Recipes'
import { Route, Routes } from 'react-router'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Container id='app' fluid className='px-0'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/form' element={<RecipeForm />} />
        <Route path='*' element={<h1>Error: 404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
