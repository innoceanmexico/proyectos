import Link from 'next/link'
import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Hyundai() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> PROYECTO HYUNDAI <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row style={{ marginBottom: '90px'}}>
          <Col>
            <div align="center">
              <img src="images/logo-hyundai.jpg" alt="" alt="" />
            </div>
            <hr/>
            <ul className="menuLateral">
              <li>
                <Link href="/cotizacion/hyundai-distribuidores">
                  <a>
                  <span class="lnr lnr-arrow-right"></span> DISTRIBUIDORES
                  </a>
                </Link>
                <Link href="/cotizacion/hyundai-seminuevos">
                  <a>
                  <span class="lnr lnr-arrow-right"></span> PLATAFORMA SEMINUEVOS
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={9}>
            <div align="center">
              <img src="images/hyundai/landing.jpg" alt="" title="" className="img-fluid" />
            </div>
            <hr/>
            <h3><span class="lnr lnr-arrow-right"></span> BACKEND</h3>
            <hr/>
            <Row>
              <Col>
                <h5><span class="lnr lnr-arrow-right"></span> BACKEND</h5>
                <hr/>
                <ul>
                  <li>SERVER</li>
                  <li>DOMAINS</li>
                  <li>SSL CERTIFICADO</li>
                  <li>PROGRAMMING</li>
                  <li>BACKUP</li>
                  <li>CRISIS PROGRAM</li>
                  <li>WEB SERVICES</li>
                  <li>CONTACT FORMS</li>
                  <li>DATA GATHERING</li>
                  <li>DRS MAINTENANCE</li>
                  <li>FRONT DEVELOPMENT</li>
                  <li>DRS FOLLOW UP WITH LEADERS</li>
                </ul>
              </Col>
              <Col>
                <h5><span class="lnr lnr-arrow-right"></span> ADOBE SCOPE</h5>
                <hr/>
                <ul>
                  <li>SERVER</li>
                  <li>PROGRAMMING (ADJUSTMENTS, BUGS)</li>
                  <li>BACKUP</li>
                  <li>CRISIS PROGRAM IMPLEMENTATION</li>
                </ul>
              </Col>
              <Col>
                <h5><span class="lnr lnr-arrow-right"></span> IWM | APPS</h5>
                <hr/>
                <ul>
                  <li>DOMAINS</li>
                  <li>SSL CERTIFICATE</li>
                  <li>CRISIS PROGRAM</li>
                  <li>MANAGEMENT</li>
                  <li>DATA GATHERING</li>
                  <li>WEB SERVICES</li>
                  <li>FRONT DEVELOPMENT</li>
                  <li>CRM FORMS</li>
                  <li>DRS</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Hyundai;