import { useState } from 'react'
import { Form, Row, Col, Button, InputGroup, Container } from 'react-bootstrap';


function UpdateRecipe() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container style={{ height: '100vh' }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} controlId="titleValidation">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Title of Recipe"
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
            />
            <Form.Control.Feedback>Looks yummy!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid url.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={4} controlId="ingredientsValidation">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control type="text" placeholder="Ingredient" required />
            <Form.Control.Feedback></Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide am ingredient.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="instructionsValidation">
            <Form.Label>Instructions</Form.Label>
            <Form.Control as="textarea" placeholder="Cooking Instructions Here..." required />
            <Form.Control.Feedback>Can&apos;t wait to try it.</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide some cooking instructions.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant='danger' type="submit">Save</Button>
      </Form>
    </Container>
  );
}

export default UpdateRecipe