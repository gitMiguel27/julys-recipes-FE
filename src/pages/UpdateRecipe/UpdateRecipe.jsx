import { useState } from "react";
import { Form, Row, Col, Button, Container, Alert, InputGroup, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import './UpdateRecipe.css'
import { useTranslation } from "react-i18next";

function UpdateRecipe({ currentRecipe, setCurrentRecipe, recipes, setRecipes }) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [validated, setValidated] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [ingredientInputs, setIngredientInputs] = useState(currentRecipe.ingredients)
  const [ingredient, setIngredient] = useState("")
  const [formData, setFormData] = useState({
    title: currentRecipe.title,
    image: currentRecipe.image,
    ingredients: currentRecipe.ingredients,
    instructions: currentRecipe.instructions,
  })
  const [cancel, setCancel] = useState(true)

  function addIngredient() {
    setIngredientInputs([ ingredient, ...ingredientInputs])

    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ingredient],
    })

    setIngredient("")
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
    if (event.target.name === "ingredients") {
      setIngredient(event.target.value)
      return
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    const form = event.currentTarget

    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setIsAlert(true)
      updateRecipe(formData)
    }

    setValidated(true)
  }

  async function updateRecipe(createdRecipe) {
    try {
      let response = await fetch(`https://julys-recipes-be.onrender.com/api/recipes/${currentRecipe._id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createdRecipe),
      })
      let updatedRecipe = await response.json()
      let updatedRecipeList = recipes.map(recipe => {
        return (
          recipe._id === updatedRecipe._id ? updatedRecipe : recipe
        )
      })
      setRecipes(updatedRecipeList)
      setCurrentRecipe(updatedRecipe)
      setCancel(!cancel)
    } catch (error) {
      console.error({ error: error.message })
    }
  }

  return (
    <Container className="my-5" style={{ height: "200vh" }}>
      {
        isAlert ? <Alert variant="success">Successfully updated recipe. <Alert.Link as={NavLink} to={`/${currentRecipe._id}`} onClick={() => setIsAlert(false)} >View recipe.</Alert.Link></Alert> : <></>
      }
      {
        cancel ? 
        <Row>
          <Col className='d-flex justify-content-start my-auto' xs={12}>
            <Button variant='danger' className='me-3' onClick={() => navigate(`/${currentRecipe._id}`)}>{t('cancelRecipeButton')}</Button>
          </Col>
        </Row>
        :
        <></>
      }
      <Row>
        <Col xs={12} md={4} className="mx-auto my-3">
          <Image src={currentRecipe.image} alt={currentRecipe.title} fluid rounded />
        </Col>
      </Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-5">
          <Form.Group as={Col} xs={12} controlId="titleValidation">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={t('placeHolderTitle')}
              defaultValue={currentRecipe.title}
              name="title"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {t('feedbackTitle')}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="imageValidation">
            <Form.Label>Image</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={t('placeHolderImage')}
              defaultValue={currentRecipe.image}
              name="image"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {t('feedbackImage')}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={3} controlId="ingredientsValidation">
            <Form.Label>Ingredients</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="ingredients"
                onChange={handleChange}
              />
              <Button variant="danger" onClick={addIngredient} >{t('addIngredientButton')}</Button>
            </InputGroup>
          </Form.Group>
          <Row className="mt-3">
          {
            ingredientInputs.map((input) => {
              let index = ingredientInputs.indexOf(input)
              return (
                <Form.Group
                  key={index}
                  as={Col}
                  xs={12}
                  md={3}
                  controlId={`input-${index}`}
                >
                  <Form.Control
                    className="ingredient-input"
                    type="text"
                    name="ingredients"
                    value={input}
                    onClick={handleDeleteIngredient}
                  />
                  <Form.Control.Feedback type="invalid">
                    {t('feedbackIngredient')}
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
              placeholder={t('placeHolderInstructions')}
              defaultValue={currentRecipe.instructions}
              name="instructions"
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {t('feedbackInstructions')}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="danger" type="submit">
          {t('saveButton')}
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateRecipe;
