import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavbarLightMode = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">ONLY GIRLS TATTOO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#action1">RESERVA</Nav.Link>
                        <Nav.Link href="#action2">PIERCINGS</Nav.Link>
                        <NavDropdown title="SUCURSALES" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">NORDELTA</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                PACHECO
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            PREGUNTAS FRECUENTES
                        </Nav.Link>
                    </Nav>
                <CartWidget/>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                        <Button id='botonBuscar' variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarLightMode;