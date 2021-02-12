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
                  <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> WORKFLOW</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"><span className="lnr lnr-arrow-right"></span> AGILE</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={2} sm={10} md={10} lg={10} className="p-0">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="contenidoTab">
                  <h1>Digital Development workflow</h1>
                  <hr/>
                  <p>INNOCEAN Compañia global de comunicación y marketing con 18 operaciones en el mundo y más de 1,700 empleados.</p>
                  <hr/>
                  <div className="flow">
                    <div align="center">
                    <img src="/images/digital/web-flow.jpg" className="img-fluid" alt="" title="" />
                    </div>
                    <hr/>
                    <p>The web development process can actually vary in terms of manpower. For example for big businesses, there are hundreds of people working together as a team. On the other hand, it is very much possible that a single person can make the whole website on his own too. Certainly, the outcome of both of these categories will be completely different. In the case of the first approach, <b>Agile Methodologies</b> are very helpful. The content management system is also in use during the process to make content changes easily.</p>
                    <h3>the web development chain of command includes:</h3>
                    <ul>
                      <li>a) Server-side scripting</li>
                      <li>b) Client-side scripting</li>
                      <li>c) Database technology</li>
                    </ul>
                  </div>
                </div>
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
