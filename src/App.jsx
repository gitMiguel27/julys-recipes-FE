import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import RecipeForm from './components/RecipeForm/RecipeForm'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<RecipeForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
