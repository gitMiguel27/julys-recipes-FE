import { Col, Container, Image, Row } from 'react-bootstrap'
import ceviche from '../../assets/ceviche.jpg'

function AboutContent() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center text-center gap-3' style={{ width: '75vw' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={7} >
            <Image src={ceviche} alt='ceviche image' fluid rounded />
          </Col>
        </Row>
      </Container>
      <h3>About July&apos;s Recipes</h3>
      <p>These recipes are inspired by my mom&apos;s cooking. She doesn&apos;t have any culinary training, but her food always comes out tasty because she cooks from the heart. I am sharing her recipes on here so her talent and love for food continues on. And for people to learn about Peruvian cuisine, one of the best cuisines out there. Hope you enjoy!</p>
    </Container>
  )
}

export default AboutContent