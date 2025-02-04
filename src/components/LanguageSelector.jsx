import { Col, Container, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function LanguageSelector() {
    const { i18n } = useTranslation()

    const languages = [
        { code: "en", lang: "English" },
        { code: "sp", lang: "Spanish" },
    ]

    function changeLanguage(code) {
        i18n.changeLanguage(code)
    }

  return (
    <Col xs={12} md={4}>
        <Container className="px-0" style={{ maxWidth: "15vw" }}>
            <h5>Languages</h5>
            <Nav
                as="ul"
                className="flex-column"
                gap={0}
            >
                {
                    languages.map((language) => {
                        return (
                            <Nav.Item key={language.code} as="li" style={{ width: "max-content" }} onClick={() => changeLanguage(language.code)}>
                                <Nav.Link as={NavLink} to="/" className="p-0" style={{ color: 'black' }}>
                                {language.lang}
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
