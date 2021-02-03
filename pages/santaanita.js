import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Santaanita() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> PROYECTO SANTA ANITA <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row style={{ marginBottom: '90px'}}>
          <Col>
            <div align="center">
              <img src="images/logo-santaanita_negro.png" alt="" alt="" />
            </div>
          </Col>
          <Col xs={10}>
            <h5><span class="lnr lnr-arrow-right"></span> INTRODUCCIÓN</h5>
            <hr/>
            <p>Desarrollo de propuesta de diseño de esrategía digital.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Santaanita;