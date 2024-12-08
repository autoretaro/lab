import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/img/main/Autoretrato.svg";

function Menu() {
  return (
    <header>
      <Navbar expand="lg" className="bg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5">
              {/* Adicione classes do Bootstrap */}
              <Nav.Link 
                as={Link} 
                to="/" 
                className="text-dark fw-bold hover-scale"
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/about" 
                className="text-dark fw-bold hover-scale"
              >
                Sobre
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/catalog" 
                className="text-dark fw-bold hover-scale"
              >
                Catálogo
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/poetry" 
                className="text-dark fw-bold hover-scale"
              >
                Poesia
              </Nav.Link>
              <NavDropdown title="Redes Sociais" id="basic-nav-dropdown" className="text-dark">
                <NavDropdown.Item
                  href="https://www.instagram.com"
                  target="_blank"
                  className="fs-5 text-dark fw-bold hover-scale"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.facebook.com"
                  target="_blank"
                  className="fs-5 text-dark fw-bold hover-scale"
                >
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
