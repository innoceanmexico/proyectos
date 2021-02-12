import NavbarPrincipal from '../../components/navbarPrincipal'
import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

export default function Development() {
  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div>
        <Container fluid={true} className="p-0 m-0 development">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="p-0 m-0" style={{ height: '100vh' }}>
            <Col className="p-0 m-0" xs={2} sm={2} md={2} lg={2} className="p-0" style={{ background: "#111" }}>
              <Link href="/digital">
                <a className="regreso">
                  <span class="lnr lnr-chevron-left"></span>
                </a>
              </Link>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={2} sm={10} md={10} lg={10} className="p-0">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                wefqwfewef
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                wefwefwef
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
