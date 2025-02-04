import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'
import { useTranslation, Trans } from 'react-i18next'

function Welcome() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Container className='welcome-container d-flex flex-column justify-content-lg-center' style={{ height: '100vh' }}>
        <h1>{t('welcomeHeader1')}</h1>
        <Trans i18nKey='welcomeHeader3' >
          <h3>Dishes inspired by my mom<br/>Authentically, Peruvian</h3>
        </Trans>
        <Button variant='danger' style={{ width: 'max-content' }} onClick={() => navigate('/recipes')} >{t('viewRecipesButton')}</Button>
    </Container>
  )
}

export default Welcome