import "./styles.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-purple'>
      <Container>
        <Navbar.Brand href="#home" className='logo-navbar'>SuperCoder</Navbar.Brand>
        <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className='text-navbar' href="#Inicio">Inicio</Nav.Link>
            <Nav.Link className='text-navbar' href="#Productos">Productos</Nav.Link>
            <Nav.Link className='text-navbar' href="#Contacto">Contacto</Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;