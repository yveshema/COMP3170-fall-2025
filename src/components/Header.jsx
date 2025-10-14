import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <Navbar fixed="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <img 
                        src="/logoipsum.png"
                        alt="logo"
                        style={{ width: '10rem' }}
                    />
                </Navbar.Brand>

                <Form>
                    <Form.Control type="text" placeholder="search" size="sm" />
                </Form>

                <Nav className="ms-auto">
                    <Nav.Link as="a" href="#">Home</Nav.Link>
                    <Nav.Link as="a" href="#features">Features</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}