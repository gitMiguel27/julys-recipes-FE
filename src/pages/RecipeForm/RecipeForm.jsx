import { useState } from 'react'
import { Form, Row, Col, Button, Container, Alert, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './RecipeForm.css'
import { useTranslation } from 'react-i18next';

function RecipeForm({ recipes, setRecipes }) {
  const { t } = useTranslation()

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
      let response = await fetch(`https://julys-recipes-be.onrender.com/api/recipes`, {
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
            <Form.Label>{t('labelTitle')}</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={t('placeHolderTitle')}
              name='title'
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {t('feedbackTitle')}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="imageValidation">
            <Form.Label>{t('labelImage')}</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={t('placeHolderImage')}
              name='image'
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {t('feedbackImage')}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={3} controlId="ingredientsValidation">
            <Form.Label>{t('labelIngredients')}</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                name='ingredients'
                onChange={handleChange}
              />
              <Button variant='danger' onClick={addIngredient}>{t('addIngredientButton')}</Button>
              <Form.Control.Feedback type="invalid">
                {t('feedbackInstructions')}
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
                </Form.Group>
              )
            })
          }
          </Row>
          <Form.Group as={Col} xs={12} controlId="instructionsValidation">
            <Form.Label>{t('labelInstructions')}</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder={t('placeHolderInstructions')}
              name='instructions'
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {t('feedbackInstructions')}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant='danger' type="submit">{t('createRecipeButton')}</Button>
      </Form>
    </Container>
  )
}

export default RecipeForm