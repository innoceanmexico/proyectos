import Link from 'next/link'
import Layout from '../../../components/layout'
import Panel from './panel/panel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

import Roadmap from '../../../components/graficas/roadmap'


export default function Development() {
  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div>
        <Container fluid={true} className="p-0 m-0 development hyundai">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="p-0 m-0" style={{ height: '100vh', width: '100%' }}>
            <Col className="p-0 m-0" xs={2} sm={2} md={2} lg={2} className="p-0" style={{ background: "#111" }}>
              <Link href="/hyundai/camiones/">
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
                  <Nav.Link eventKey="third"><span className="lnr lnr-arrow-right"></span> SECCIONES</Nav.Link>
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
              <Tab.Pane eventKey="second" style={{ background: '#fff', height: '100vh', padding: '20px'}}>
                <h1>Línea de tiempo:</h1>
              <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Activitidades</th>
                  <th scope="col" colSpan="4">Febrero</th>
                  <th scope="col" colSpan="4">Marzo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Diseño del Frontend</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Backend / Infrastructura de desarrollo e implementación</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Creación e integración de Web Services y API's</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Desarrollo CMS</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Integración con CRM</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Pruebas y ajustes finales</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                  <td>S1</td>
                  <td>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                </tr>
              </tbody>
            </table>
            <hr/>
            <Roadmap />
              </Tab.Pane>
              <Tab.Pane eventKey="third" style={{ background: '#fff', height: '100vh', padding: '20px'}}>
                <div className="contenidoTab mb-5">
                  <h1 className="text-dark"><span className="lnr lnr-arrow-right"></span> MAPA DE SECCIONES</h1>
                  <hr/>
                  <div align="center">
                    <img src="/images/hyundai/mapa.svg" className="img-fluid" alt="" title="" />
                  </div>
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
