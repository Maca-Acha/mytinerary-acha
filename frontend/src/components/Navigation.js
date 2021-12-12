import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import logo2 from "../assets/logo-2.png"
import { BiUserCircle } from "react-icons/bi";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Navigations() {
    const user = <BiUserCircle />
    return (
        <>
            <Navbar collapseOnSelect className='nav' expand='lg'>
            <Container>
                <Navbar.Brand href="/" className="titulo-logo">
                    <img alt="logo" src={logo2} className="logo2" />
                    <h2 className="titulo">MyTinerary</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav'>
                    <Nav className="navHome">
                            <Link to='/' className='color-font'>Home</Link>
                            <Link to='/cities' className='color-font'>Cities</Link>
                        <NavDropdown title= {user} className="iconn" id="basic-nav-dropdown">
                            <NavDropdown.Item className="usuario" href="/signin">Sign in</NavDropdown.Item>
                            <NavDropdown.Item className="usuario" href="/signup">Sign up</NavDropdown.Item>
                        </NavDropdown>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </>
        )
    } 