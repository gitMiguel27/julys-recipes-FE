import { Col, Container, Nav } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import './LanguageSelector.css'

function LanguageSelector() {
    const { i18n, t } = useTranslation()

    const languages = [
        { code: "en", lang: "English" },
        { code: "sp", lang: "Spanish" },
    ]

    function changeLanguage(code) {
        i18n.changeLanguage(code)
    }

  return (
    <Col xs={12} md={4} className="mb-2 text-center text-md-start">
        <Container className="px-0">
            <h5>{t('footerLanguageHeading')}</h5>
            <Nav
                as="ul"
                className="flex-column align-items-center align-items-md-start"
                gap={0}
            >
                {
                    languages.map((language) => {
                        return (
                            <Nav.Item key={language.code} as="li" className="mt-1" style={{ width: "max-content" }} onClick={() => changeLanguage(language.code)}>
                                <Nav.Link as={NavLink} to="/" className="language p-0">
                                {language.lang === "English" ? t('footerEnglishLanguage') : t('footerSpanishLanguage')}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
        </Container>
    </Col>
  );
}

export default LanguageSelector;
