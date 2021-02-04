import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Data() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> ANALITYCS DE PROYECTOS <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="marcas">
              <div>
                <h1><span className="lnr lnr-arrow-right"></span> TEALIUM</h1>
                <h5>CUSTOMER DATA HUB</h5>
                
                <hr/>
                <h3>https://tealium.com/</h3>
                <h4>Unify your data</h4>
                <p>Connected organizations know their customers, identify untapped opportunities, and deliver incredible customer experiences.</p>
                <h4>Customer Data Hub</h4>
                <p>Unite your tools and teams with universally-accessible, real-time customer data.</p>
              </div>
            </div>
          </Col>
          <Col>
            <h3>SCOPE</h3>
            <hr/>
            <ul>
              <li>FRAGMENTED DATA</li>
              <li>TOUCH POINTS</li>
              <li>DATA COLLECTION - DISCONNECTED</li>
              <li>SILOS
                <ul>
                  <li>RULES</li>
                  <li>AUDIENCES</li>
                  <li>DEFINITIONS</li>
                </ul>
              </li>
              <li>INCONSISTENT EXPERIENCES</li>
              <li>UNIFIED PORTABLE VIEW OF CUSTOMERS</li>
              <li>CONSISTENCY</li>
              <li>CLARITY</li>
              <li><b>FRAGMENTATION INTO FOUNDATION</b></li>
              <li>INTEGRATIONS</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="marcas">
              <div>
                <hr/>
                <h2><span className="lnr lnr-arrow-right"></span> ANALITYCS</h2>
                <hr/>
                <h3>https://tealium.com/</h3>
                <h4>Unify your data</h4>
                <p>Connected organizations know their customers, identify untapped opportunities, and deliver incredible customer experiences.</p>
                <h4>Customer Data Hub</h4>
                <p>Unite your tools and teams with universally-accessible, real-time customer data.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Data;