import Layout from '../components/layout'
import Link from 'next/link'
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
    'links': ['www.kia.com', 'www.apartatukia.com', 'www.kia.com.mx'],
    'link': 'kia'
  },
  {
    'nombre': 'HYUNDAI',
    'logo': 'images/logo-hyundai.jpg',
    'links': ['www.kia.com', 'www.apartatukia.com', 'www.kia.com.mx'],
    'link': 'hyundai'
  },
  {
    'nombre': 'CINSA',
    'logo': 'images/logo-cinsa.jpg',
    'links': ['www.kia.com', 'www.apartatukia.com', 'www.kia.com.mx'],
    'link': 'cinsa'
  },
  {
    'nombre': 'SANTA ANITA',
    'logo': 'images/logo-santaanita_negro.png',
    'links': ['www.kia.com', 'www.apartatukia.com', 'www.kia.com.mx'],
    'link': 'santaanita'
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
            {proyectos.map((proyecto, ide) => (
              <Card style={{ width: '30%', margin: '5px 15px' }} key={ide}>
                <div className="laimagen">
                  <Card.Img variant="top" src={proyecto.logo} style={{ width: '150px'}} />
                </div>
                <Card.Body>
                  <Card.Title>{proyecto.nombre}</Card.Title>
                  <Card.Text>
                    Desarrollo de propuesta digital INNOCEAN MÉXICO.
                  </Card.Text>
                  <Link href={proyecto.link}>
                    <Button variant="primary" className="btn btn-secondary">DESARROLLO</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
