import Link from 'next/link'
import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Kia() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> PROYECTO KIA <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row style={{ marginBottom: '90px'}}>
          <Col>
            <div align="center">
              <img src="/images/logo-kia.jpg" alt="" alt="" />
            </div>
            <hr/>
            <ul className="menuLateral">
              <li>
                <Link href="/cotizacion/kiacareers">
                  <a>
                  <span class="lnr lnr-arrow-right"></span> KIA CAREERS
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cotizacion/livechat">
                  <a>
                  <span class="lnr lnr-arrow-right"></span> LIVE CHAT
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cotizacion/livechat">
                  <a>
                  <span class="lnr lnr-arrow-right"></span> KIA.COM
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Kia;