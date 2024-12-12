import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/img/main/Autorretrato-logo.svg";
import { SlSocialInstagram } from "react-icons/sl";
import { FaMeta } from "react-icons/fa6";



function Menu() {
  return (
    <header>
      <nav>
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
                  className="fs-5 text-dark "
                >
                  <SlSocialInstagram className='fw-bold hover-scale' size={35}/>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.facebook.com"
                  target="_blank"
                  className="fs-5 text-dark "
                >
                  <FaMeta className='fw-bold hover-scale' size={35}/>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </nav>
    </header>
  );
}

export default Menu;
