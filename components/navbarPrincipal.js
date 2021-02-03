import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavbarPrincipal() {
  return(
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link href="/">
            <img src="images/logo.png" alt="innocean méxico" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/"><a className="menutop">PROYECTOS</a></Link>
            <Link href="/"><a className="menutop">CONTROL</a></Link>
            <Link href="/"><a className="menutop">DESARROLLO</a></Link>
            <Link href="/"><a className="menutop">HERRAMIENTAS</a></Link>
            <Link href="/"><a className="menutop">DATA</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarPrincipal;