import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const proyectos = [
  {
    'nombre': 'Kia Motors México',
    'logo': 'images/logo-kia.jpg',
    'links': ['www.kia.com', 'www.apartatukia.com', 'www.kia.com.mx']
  },
  {
    'nombre': 'HYUNDAI',
    'logo': 'images/logo-kia.jpg',
    'links': ['www.kia.com', 'www.apartatukia.com', 'www.kia.com.mx']
  }
]

export default function Proyectos() {
  return (
    <Layout>
      <NavbarPrincipal />
      <div className="proyectos">
        <Container>
          <Row>
            <Col>
              <hr/>
                <h2><span class="lnr lnr-chevron-right"></span> PROYECTOS </h2>
              <hr/>
            </Col>
          </Row>
          <Row>
            {proyectos.map(proyecto => (
              <Card style={{ width: '100%', margin: '5px 15px' }}>
                <div className="laimagen">
                  <Card.Img variant="top" src={proyecto.logo} />
                </div>
                <Card.Body>
                  <Card.Title>{proyecto.nombre}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
