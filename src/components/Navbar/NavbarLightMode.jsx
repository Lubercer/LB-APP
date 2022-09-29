import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
const NavbarLightMode = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand  to="/">ONLY GIRLS TATTOO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"  id="navStyle" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link  as={Link} to='/'>CATALOGO</Nav.Link>
                        <NavDropdown title="CATEGORIAS" id="navbarScrollingDropdown">
                            <Nav.Link as={Link} to='categoria/aceroquirurgico'>ACERO QUIRURGICO</Nav.Link >
                            <Nav.Link as={Link} to='categoria/titanio'>TITANIO</Nav.Link>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link >
                    <CartWidget/>
                    </Nav.Link>
                    </Nav>    
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="..."
                            className="me-2"
                            aria-label="Search"
                            />
                        <Button id='botonBuscar'>BUSCAR</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarLightMode;