import Layout from '../../components/layout'
import NavbarPrincipal from '../../components/navbarPrincipal'
import Roadmap from '../../components/graficas/roadmap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProductRoadmap() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container style={{marginBottom: '90px'}}>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> PRODUCT ROADMAP <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
            <Roadmap />
          </Col>
        </Row>
      </Container>
    </Layout>

  )
}

export default ProductRoadmap;