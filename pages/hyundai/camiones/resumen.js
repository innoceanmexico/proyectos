import Link from 'next/link'
import Layout from '../../../components/layout'
import Panel from './panel/panel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

export default function Resumen() {
  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div>
        <Container fluid={true} className="p-0 m-0 development hyundai">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="p-0 m-0" style={{ height: '100vh', width: '100%' }}>
            <Col className="p-0 m-0" xs={2} sm={2} md={2} lg={2} className="p-0" style={{ background: "#111" }}>
              <div align="center" className="p-3">
                <img src="/images/logo-blanco.png" alt="innocean méxico" />
              </div>
              <Link href="/hyundai/camiones/">
                <a className="regreso">
                  <span class="lnr lnr-chevron-left"></span>
                </a>
              </Link>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> RESUMEN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"><span className="lnr lnr-arrow-right"></span> INTRODUCCIÓN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"><span className="lnr lnr-arrow-right"></span> LENGUAJES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth"><span className="lnr lnr-arrow-right"></span> ESTRUCTURA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth"><span className="lnr lnr-arrow-right"></span> BACKEND</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth"><span className="lnr lnr-arrow-right"></span> LÍNEA DE TIEMPO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eigth"><span className="lnr lnr-arrow-right"></span> FASES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ninth"><span className="lnr lnr-arrow-right"></span> EQUIPO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh"><span className="lnr lnr-arrow-right"></span> COSTOS</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} className="p-0" style={{
              background: "#fff", backgroundSize: 'cover'}}>
              <Tab.Content style={{padding: '20px', paddingBottom: '90px'}}>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> RESUMEN</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <p>La plataforma <b>HYUNDAI CAMIONES Y BUSES</b> que se desarrollará tiene como objetivo gestionar el tráfico, intenciones, flujos e intercambios de cada visita, <b>optimizando la búsqueda de información de manera ágil y rápida</b>, también busca gestionar los flujos de procesos en las tomas de decisiones al momento de lanzar una campaña comercial o cuando se tenga que contratar a un proveedor en la construcción del proyecto, puesto que los informes llevan a que se puedan prever situaciones de acuerdo al histórico que se puede manejar. </p>
                    
                    <p>Por esto se desarrollará e implementará una base de datos y una interfaz web que permite la administración y gestión de la información de una manera ágil y sistematizada, aprovechando cada uno de los recursos con los que se cuenta y sacando el máximo provecho. </p>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/camion1.jpg" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <hr/>
                    <h2>Puntos de contacto con el cliente:</h2>
                    <hr/>
                    <div align="center">
                      <img src="/images/hyundai/touchpoints.svg" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> INTRODUCCIÓN</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <p>Con los avances en materia de desarrollo, es claro que todo se está dirigiendo a aplicaciones en dispositivos móviles y aplicaciones web. El desarrollo propuesto es una solución para el tipo de software en donde es necesario acceder desde cualquier lugar, a cualquier hora y desde cualquier dispositivo. Todo esto gracias a que la mayoría de los procesos que ahora se llevan en algunas empresas ya se hacen en la nube y se requiere que la información sea asequible en tiempo real.</p>
                    <p>También existen diversos lenguajes de programación para el entorno web, como Python, php, asp, JavaScript, css, sin olvidar el HTML, entre muchos otros. Pero para el desarrollo de esta aplicación se trabajará con los lenguajes php, HTML, JavaScript y un framework basado en Bootstrap 4 llamado MDB.</p>
                    <hr/>
                    <h2>Backend técnico:</h2>
                    <hr/>
                    <div align="center">
                      <img src="/images/hyundai/backend.svg" className="img-fluid" alt="" title="" />
                    </div>
                    <hr/>
                    <p>Es por esto por lo que se desea realizar una aplicación a la medida, que cumpla con las expectativas de la alta gerencia, que sea fácil de utilizar y que sea escalable a medida que la empresa vaya creciendo en su negocio. </p>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/camion3.jpg" className="img-fluid" alt="" title="" />
                    </div>
                    <hr/>
                    <div align="center">
                      <img src="/images/hyundai/camion2.jpg" className="img-fluid" alt="" title="" />
                    </div>
                    <hr/>
                    <div align="center">
                      <img src="/images/hyundai/camion4.jpg" className="img-fluid" alt="" title="" />
                    </div>
                    <hr/>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third" className="pb-5">
                  <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> LENGUAJES DE PROGRAMACIÓN</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h1><b>FRONTEND</b></h1>
                      <hr/>
                      <h1>HTML</h1>
                      <p>Es el lenguaje madre y básico de todos los sitios web. Su función principal es dar formato, especialmente a los textos que forman parte de un documento web, todo esto basado en un conjunto de etiquetas con funciones específicas. No tiene la capacidad de interactuar con variables como lo hace un lenguaje de programación.</p>
                      <hr/>
                      <h1>CSS</h1>
                      <p>Hojas de estilo en cascada (en inglés Cascading Style Sheets), se define como un lenguaje que sirve para establecer la presentación de un documento estructurado y escrito en HTML.</p>
                      <hr/>
                      <h1>JavaScript</h1>
                      <p>No es un lenguaje de programación propiamente dicho como Java, C++, Basic, etc. Simplemente es un lenguaje script orientado a documentos web. Esto quiere decir que no es posible implementar aplicaciones JavaScript que se ejecuten separadas de un documento web.</p>
                      <hr/>
                      <h1>ReactJS</h1>
                      <p>React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.</p>
                      <hr/>
                    </Col>
                    <Col>
                    
                      <h1><b>BACKEND</b></h1>
                      <hr/>
                      <h1>NodeJS</h1>
                      <p>Utiliza un modelo de entrada y salida sin bloqueo controlado por eventos que lo hace ligero y eficiente (con entrada nos referimos a solicitudes y con salida a respuestas). Puede referirse a cualquier operación, desde leer o escribir archivos de cualquier tipo hasta hacer una solicitud HTTP. </p>
                      <hr/>
                      <h1>JSON</h1>
                      <p>JSON (acrónimo de JavaScript Object Notation, «notación de objeto de JavaScript») es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera (año 2019) un formato independiente del lenguaje.</p>
                      <hr/>
                      <h1>MySQL</h1>
                      <p>Es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base datos de código abierto más popular del mundo.</p>
                      <hr/>
                      <h1>AWS</h1>
                      <p>Es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base datos de código abierto más popular del mundo.</p>
                      <hr/>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth" className="pb-5">
                  <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> ESTRUCTURA DEL SITIO</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={9}>
                    <div align="center">
                      <img src="/images/hyundai/mapa.svg" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/web.jpg" className="img-fluid" alt="" title="" />
                    </div>
                    <hr/>
                    <div align="center">
                      <img src="/images/hyundai/web1.jpg" className="img-fluid" alt="" title="" />
                    </div>
                    <hr/>
                    <div align="center">
                      <img src="/images/hyundai/web2.jpg" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth" className="pb-5">
                  <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> ESTRUCTURA DEL BACKEND</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/flow-backend.svg" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth" className="pb-5">
                  <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> LÍNEA DE TIEMPO</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Plan estimado de trabajo</h5>
            <p>* 6 Semanas</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Actividades</th>
                  <th scope="col" colSpan="4">Febrero</th>
                  <th scope="col" colSpan="4">Marzo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Diseño de Frontend</th>
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
                  <th scope="row">Backend / Infraestructura e implementación</th>
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
                  <th scope="row">Creación e integración de Servicios WEB y API's</th>
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
                  <th scope="row">Desarrollo de CMS</th>
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
                  <th scope="row">Ajustes y Tests finales</th>
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
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh" className="pb-5">
                  <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> COSTOS POR DESARROLLO</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/tabla-costos.svg" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="eigth" className="pb-5">
                  <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> FASES DEL DESARROLLO</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/flow-desarrollo.svg" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="ninth" className="pb-5">
                  <Row>
                    <Col xs={10}>
                    <h1><span class="lnr lnr-arrow-right"></span> EQUIPO DE DESARROLLO</h1>
                    <hr/>
                    </Col>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/hyundai-camiones-logo.png" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <div align="center">
                      <img src="/images/hyundai/equipo.svg" className="img-fluid" alt="" title="" />
                    </div>
                    </Col>
                  </Row>
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
