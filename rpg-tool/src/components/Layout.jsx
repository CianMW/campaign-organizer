import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sidebar from "./Sidebar"
import TextEditor from "./TextEditor"



const Layout = () => {

    return(
        <Container fluid>
            <Row>
                <Col md={3}>
                <Sidebar />
                </Col>
                <Col md={9}>
                <TextEditor />
                </Col>
            </Row>
        </Container>
    )
}

export default Layout