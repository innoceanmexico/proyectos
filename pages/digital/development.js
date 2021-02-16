import NavbarPrincipal from '../../components/navbarPrincipal'
import Link from 'next/link'
import Layout from '../../components/layout'
import Panel from './panel/panel'
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
          <Row className="p-0 m-0" style={{ height: '100vh', width: '100%' }}>
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
                  <Nav.Link eventKey="second"><span className="lnr lnr-arrow-right"></span> TIMELINE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"><span className="lnr lnr-arrow-right"></span> PLANNING</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth"><span className="lnr lnr-arrow-right"></span> DESIGNING</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} className="p-0">
            <Tab.Content>
              {/* 
              <Panel 
                laLlave={"first"} 
                laImagen={"/images/innocean-edificio.jpg"}
                elTitulo={"Digital Development workflow"}
                laIntro={"INNOCEAN Compañia global de comunicación y marketing con 18 operaciones en el mundo y más de 1,700 empleados."}
              />
              */}
              <Tab.Pane eventKey="first" style={{ background: "rgba(0,0,0,0.8)"}} className="p-3">
                <div className="contenidoTab mb-5">
                  <h1><span class="lnr lnr-arrow-right"></span> WORKFLOW</h1>
                  <hr/>
                  <div align="center">
                    <img src="/images/kuak/workflow.svg" className="img-fluid" alt="innocean méxico" title="innocean méxico" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second" style={{ background: "rgba(0,0,0,0.8)"}} className="p-3">
                <div className="contenidoTab mb-5">
                  <h1><span class="lnr lnr-arrow-right"></span> TIMELINE NEW CLIENTS</h1>
                  <hr/>
                  <div align="center">
                    <img src="/images/kuak/g1.svg" className="img-fluid" alt="innocean méxico" title="innocean méxico" />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third" style={{ background: "rgba(0,0,0,0.8)"}} className="p-3">
              <div className="contenidoTab mb-5">
                  <h1><span class="lnr lnr-arrow-right"></span> PLANNING</h1>
                  <hr/>
                  <Row>
                    <Col>
                    <h2 className="text-white">Key Factors to consider</h2>
                    <hr/>
                    <p className="text-white">Although, you need to consider and compare many factors but focusing on the right factors would enable you to make your decision easily. So, we are organizing our comparison upon the following factors:</p>
                    <ul className="text-white">
                      <li>Costs</li>
                      <li>Skill set</li>
                      <li>Turnover</li>
                      <li>Communication</li>
                    </ul>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/kuak/g2-planning.svg" className="img-fluid" alt="innocean méxico" title="innocean méxico" style={{maxHeight: '70vh'}} />
                    </div>
                    </Col>
                  </Row>
                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth" style={{ background: "rgba(0,0,0,0.8)"}} className="p-3">
                <div className="contenidoTab mb-5 text-white">
                  <h1><span class="lnr lnr-arrow-right"></span> DESIGNING AND PRODUCTION</h1>
                  <hr/>
                  <div align="center">
                    <img src="/images/digital/objectives.jpg" className="img-fluid" alt="" title="" style={{maxWidth: '500px'}} />
                  </div>
                  <hr/>
                  <p>Further, in designing phase, the programmer and designer work together. Now the designer either have to draw the draft on paper or make on the computer. After the client likes the draft, the designers start working on the shape, texture, color scheme and all the little details. Actually, they have to make it just right according to the feel of the site.<br/><br/>Finally, the actual website production is happening. The site is going to the engineering part. All the prototypes, the visuals, graphics, elements, all the content is added up to make the actual website.</p>
                  <ul>
                      <li>a) Scrum</li>
                      <li>b) Extreme programming</li>
                      <li>c) Trello</li>
                      <li>d) Base-camp</li>
                      <li>e) Asana</li>
                    </ul>
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
