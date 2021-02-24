import NavbarPrincipal from '../../components/navbarPrincipal'
import Layout from '../../components/layout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Proyectos() {
  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div className="presentacion">
        <Container fluid={true} className="p-0 m-0 intro">
          <h2>PRESENTACIÓN</h2>
          <h3>DIGITAL DEVELOPMENT</h3>
        </Container>
      </div>
    </Layout>
  )
}
