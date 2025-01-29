import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import RecipeForm from './components/RecipeForm/RecipeForm'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Container id='app' fluid className='px-0'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<RecipeForm />} />
        <Route path='*' element={<h1>Error: 404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
