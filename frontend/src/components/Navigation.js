import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import logo2 from "../assets/logo-2.png"
import { BiUserCircle } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Navigations() {
    const user = <BiUserCircle />
    return (
        <>
            <Navbar collapseOnSelect className='nav' expand='lg'>
            <Container>
                <Navbar.Brand href="/"><img src={logo2} className="logo2" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav'>
                    <Nav className="navHome">
                        <Nav.Link href='/' className='color-font'>Home</Nav.Link>
                        <Nav.Link href='/cities' className='color-font'>Cities</Nav.Link>
                        <NavDropdown title= {user} className="iconn" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sing up</NavDropdown.Item>
                        </NavDropdown>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </>
        )
    } 