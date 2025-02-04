import { useState } from 'react'
import { Form, Row, Col, Button, Container, Alert, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './RecipeForm.css'

function RecipeForm({ recipes, setRecipes }) {
  const [validated, setValidated] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [ingredientInputs, setIngredientInputs] = useState([])
  const [ingredient, setIngredient] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    ingredients: [],
    instructions: ''
  })

  function addIngredient() {
    setIngredientInputs([ ingredient, ...ingredientInputs])

    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ingredient]
    })

    setIngredient('')
  }

  function handleDeleteIngredient(event) {
    const ingredientToDelete = event.target.value

    setIngredientInputs(ingredientInputs => ingredientInputs.filter(input => input !== ingredientToDelete))
    setFormData((prevFormData) => ({
      ...prevFormData,
      ingredients: prevFormData.ingredients.filter(
        (ingredient) => ingredient !== ingredientToDelete
      ),
    }))
  }

  function handleChange(event) {
    if (event.target.name === 'ingredients') {
      setIngredient(event.target.value)
      return
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    const form = event.currentTarget
    
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setIsAlert(true)
      postRecipe(formData)
    }

    setValidated(true)
  }

  async function postRecipe(createdRecipe) {
    try {
      let response = await fetch(`http://localhost:3000/api/recipes`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createdRecipe),
      })
      let newRecipe = await response.json()

      setRecipes([...recipes, newRecipe])
    } catch (error) {
      console.error({ error: error.message })
    }
  }

  return (
    <Container className='my-5' style={{ height: '200vh' }}>
      {
        isAlert? <Alert variant='success'>Successfully created recipe. <Alert.Link as={NavLink} to='/recipes' onClick={() => setIsAlert(false)} >Go to all recipes.</Alert.Link></Alert> : <></> 
      }
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-5">
          <Form.Group as={Col} xs={12} controlId="titleValidation">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Title of Recipe"
              name='title'
              onChange={handleChange}
            />
            <Form.Control.Feedback>Sounds yummy!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid title.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="imageValidation">
            <Form.Label>Image</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Image Url"
              name='image'
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks yummy!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid url.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={3} controlId="ingredientsValidation">
            <Form.Label>Ingredients</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name='ingredients'
                onChange={handleChange}
              />
              <Button variant='danger' onClick={addIngredient}>Add Ingredient</Button>
              <Form.Control.Feedback type="invalid">
                Please provide an ingredient.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Row className='mt-3'>
          {
            ingredientInputs.map((input) => {
              let index = ingredientInputs.indexOf(input)
              return (
                <Form.Group key={index} as={Col} xs={12} md={3} controlId={`input-${index}`}>
                  <Form.Control
                    className="ingredient-input"
                    type="text"
                    name='ingredients'
                    value={input}
                    onClick={handleDeleteIngredient}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please do not leave blank.
                  </Form.Control.Feedback>
                </Form.Group>
              )
            })
          }
          </Row>
          <Form.Group as={Col} xs={12} controlId="instructionsValidation">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Cooking Instructions Here..."
              name='instructions'
              onChange={handleChange}
            />
            <Form.Control.Feedback>Can&apos;t wait to try it.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide some cooking instructions.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant='danger' type="submit">Create Recipe</Button>
      </Form>
    </Container>
  )
}

export default RecipeForm