import Link from 'next/link'
import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Proyectos() {
  return (
    <Layout>
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
            <Link href="/"><a className="menutop">DESARROLLO</a></Link>
            <Link href="/"><a className="menutop">HERRAMIENTAS</a></Link>
            <Link href="/"><a className="menutop">DATA</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="proyectos">
        <Container>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
