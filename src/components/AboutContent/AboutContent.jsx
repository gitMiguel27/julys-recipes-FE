import { Col, Container, Image, Row } from 'react-bootstrap'
import ceviche from '../../assets/ceviche.jpg'
import { useTranslation } from 'react-i18next'

function AboutContent() {
  const { t } = useTranslation()

  return (
    <Container className='d-flex flex-column align-items-center text-center gap-3 mt-5' style={{ width: '75vw' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={7} >
            <Image src={ceviche} alt='ceviche image' fluid rounded />
          </Col>
        </Row>
      </Container>
      <h3>{t('aboutHeader')}</h3>
      <p>{t('aboutText')}</p>
    </Container>
  )
}

export default AboutContent