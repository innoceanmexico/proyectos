import Link from 'next/link'
import Layout from '../../../components/layout'
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
                  <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> PLAN DE TRABAJO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"><span className="lnr lnr-arrow-right"></span> LÍNEA DE TIEMPO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"><span className="lnr lnr-arrow-right"></span> OBJECTIVES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth"><span className="lnr lnr-arrow-right"></span> DESIGNING</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} className="p-0">
            <Tab.Content>
              <Panel 
                laLlave={"first"} 
                laImagen={"/images/hyundai/camion2.jpg"}
                elTitulo={"Plan de trabajo"}
                laIntro={"Estamos seguros que podemos ofrecerle el mejor servicio y la mejor relación calidad/precio. A continuación le detallamos algunas de las ventajas de trabajar juntos:"}
              />
              <Tab.Pane eventKey="second" style={
                {
                  background: `url("/images/hyundai/camion2.jpg")`,
                  position: 'fixed',
                  backgroundSize: 'cover',
                  height: '100vh',
                  overflow: 'auto'
                }
              }>
                <div className="contenidoTab mb-5" style={{background: 'rgba(0,0,0,0.8', padding: '20px'}}>
                  <h1><span class="lnr lnr-arrow-right"></span> LÍNEA DE TIEMPO</h1>
                  <hr/>
                  <div align="center">
                    <img src="/images/digital/pre-neg.png" className="img-fluid" alt="" title="" />
                  </div>
                  <hr/>
                  <p className="text-white">Firstly, the main thing to take care of is to <b>get all the ideas on the table</b>. It is the <b>initial meeting between INNOCEAN and the client</b>. The client needs to make <b>everything clear about his expectations, his demands, his rough ideas or everything he has in his mind</b>. And the client has to think about the best strategy, which will benefit him, the most.<br/><br/>After that, <b>the team will send him the proposal which will have all the technology, budget, and the time frame updates</b>. If that is what you are looking for, then you have to sign the proposal. And they will let you know the starting date along with the expected finishing date. Finally, <b>good developers will take the client with them in every process</b>. And make them aware of the working process, tools, roles, and responsibilities to help them have a clear image.</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="contenidoTab mb-5">
                  <h1><span class="lnr lnr-arrow-right"></span> DEFINING OBJECTIVES</h1>
                  <hr/>
                  <div align="center">
                    <img src="/images/digital/objectives.jpg" className="img-fluid" alt="" title="" style={{maxWidth: '500px'}} />
                  </div>
                  <hr/>
                  <p>Defining the goals and objectives is very important. Because <b>it will tell the developing team what exactly the client is looking forward to</b>. And after that, many new and important decisions get under consideration between clients and developers. Like the final budget, the tools and techniques, the visual styles and the content structure for the audience.<br/><br/><b>Then the project manager just divides the responsibilities between the team members</b>. That thought process at the start of the project is going to save a lot of days in the end. Here the project managers have to decide the methodology they are going to use. <b>Selection of technique is going to play a very integral role in the timing and budget of the process</b>. Therefore, selecting the right one is very important.</p>
                  <ul>
                      <li>a) Scrum</li>
                      <li>b) Extreme programming</li>
                      <li>c) Trello</li>
                      <li>d) Base-camp</li>
                      <li>e) Asana</li>
                    </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="contenidoTab mb-5">
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
