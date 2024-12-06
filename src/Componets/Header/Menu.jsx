import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Header/Menu.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/img/main/Autoretrato.svg";

//oooo
function Menu() {
  return (
    <header>
    <Navbar expand="lg" className="bg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5"> {/* Use ms-auto to align items to the right */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/catalog">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/poetry">Poesia</Nav.Link>
            <NavDropdown title="Redes Socias" id="basic-nav-dropdown">
              {/* <NavDropdown.Item as={Link} to="/action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action/3.2">
                Another action
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
                  <NavDropdown.Item href="https://www.instagram.com" target="_blank" className='fs-5'>
              <i className="fab fa-instagram"></i> Instagram
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.facebook.com" target="_blank" className='fs-5'>
              <i className="fab fa-facebook"></i> Facebook
            </NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
}

export default Menu;
