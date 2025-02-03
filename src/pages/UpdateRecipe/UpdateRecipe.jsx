import { useState } from "react";
import { Form, Row, Col, Button, Container, Alert, InputGroup, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './UpdateRecipe.css'

function UpdateRecipe({ currentRecipe, setCurrentRecipe, recipes, setRecipes }) {
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
      let response = await fetch(`http://localhost:3000/api/recipes/${currentRecipe._id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createdRecipe),
      })
      let updatedRecipe = await response.json()
      let updatedRecipeList = recipes.map(recipe => {
        recipe._id === updatedRecipe._id ? { ...recipe, ...updatedRecipe } : recipe
      })

      setRecipes([updatedRecipeList])
      setCurrentRecipe(updatedRecipe)
    } catch (error) {
      console.error({ error: error.message })
    }
  }

  return (
    <Container className="my-5" style={{ height: "200vh" }}>
      {
        isAlert ? <Alert variant="success">Successfully updated recipe. <Alert.Link as={NavLink} to={`/${currentRecipe._id}`} onClick={() => setIsAlert(false)} >View recipes.</Alert.Link></Alert> : <></>
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
              value={currentRecipe.title}
              name="title"
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
              value={currentRecipe.image}
              name="image"
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
                name="ingredients"
                onChange={handleChange}
              />
              <Button variant="danger" onClick={addIngredient} >Add Ingredient</Button>
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
                    defaultValue={input}
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
              value={currentRecipe.instructions}
              name="instructions"
              onChange={handleChange}
            />
            <Form.Control.Feedback>
              Can&apos;t wait to try it.
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide some cooking instructions.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="danger" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateRecipe;
