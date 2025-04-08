import { Container, Nav, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom"
import './styles/NavBar.css'
import nav_logo from '../assets/logo.png'

const AppNav = () => {
    return(
        <Navbar expand="lg" className="AppNav">
        <Container>
          <Navbar.Brand href="/inicio">
            <img src={nav_logo} alt="logo" className="nav-logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link className="nav-link" to="/inicio">Inicio</Link>
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
              <Link className="nav-link" to="/servicios">Servicios</Link>
              <Link className="nav-link" to="/porqueguineaecuatorial">¿Por qué Guinea Ecuatorial?</Link>
              <Link className="nav-link" to="/industriasclaves">Industrias Claves</Link>
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppNav