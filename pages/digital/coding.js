import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

export default function Coding() {
  return (
    <Layout>
      <div>
        <Container fluid={true} className="p-0 m-0 development">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="p-0 m-0" style={{ height: '100vh', width: '100%' }}>
            <Col className="p-0 m-0" xs={2} sm={2} md={2} lg={2} className="p-0" style={{ background: "#111" }}>
              <Link href="/digital">
                <a className="regreso">
                  <span class="lnr lnr-chevron-left"></span>
                </a>
              </Link>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> CODING</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} className="p-0">
            <Tab.Content>
              <Tab.Pane eventKey="first" style={{ background: "rgba(0,0,0,0.8)"}} className="p-3">
                <div className="contenidoTab mb-5">
                  <h1><span class="lnr lnr-arrow-right"></span> CODING</h1>
                  <hr/>
                  <div align="center">
                    <img src="/images/kuak/coding.svg" className="img-fluid" alt="innocean méxico" title="innocean méxico" />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Container>
      </div>
    </Layout>
  )
}