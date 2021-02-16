import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

export default function Web() {
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
                  <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> WEB</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} className="p-0">
            <Tab.Content>
              <Tab.Pane eventKey="first" style={
                { 
                  background: "rgb(0,47,72)",
                  background: "#fff"
                }
              } className="p-3">
                <div className="contenidoTab mb-5">
                  <h1 className="text-dark"><span class="lnr lnr-arrow-right"></span> WEB DEVELOPMENT</h1>
                  <hr/>
                  <div align="center">
                    <img src="/images/hyundai/mern.svg" className="img-fluid" alt="innocean méxico" title="innocean méxico" />
                  </div>
                  <Row>
                      <Col>
                        <hr/>
                        <h1 styleName="text-dark"><b><span className="lnr lnr-chevron-right"></span> FRONTEND</b></h1>
                        <hr />
                        <h1 styleName="text-dark">HTML</h1>
                        <p>Es el lenguaje madre y básico de todos los sitios web. Su función principal es dar formato, especialmente a los textos que forman parte de un documento web, todo esto basado en un conjunto de etiquetas con funciones específicas. No tiene la capacidad de interactuar con variables como lo hace un lenguaje de programación.</p>
                        <hr />
                        <h1>CSS</h1>
                        <p>Hojas de estilo en cascada (en inglés Cascading Style Sheets), se define como un lenguaje que sirve para establecer la presentación de un documento estructurado y escrito en HTML.</p>
                        <hr />
                        <h1>JavaScript</h1>
                        <p>No es un lenguaje de programación propiamente dicho como Java, C++, Basic, etc. Simplemente es un lenguaje script orientado a documentos web. Esto quiere decir que no es posible implementar aplicaciones JavaScript que se ejecuten separadas de un documento web.</p>
                        <hr />
                        <h1>ReactJS</h1>
                        <p>React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.</p>
                        <hr />
                      </Col>
                      <Col>
                        <hr/>
                        <h1><b><span className="lnr lnr-chevron-right"></span> BACKEND</b></h1>
                        <hr />
                        <h1>NodeJS</h1>
                        <p>Utiliza un modelo de entrada y salida sin bloqueo controlado por eventos que lo hace ligero y eficiente (con entrada nos referimos a solicitudes y con salida a respuestas). Puede referirse a cualquier operación, desde leer o escribir archivos de cualquier tipo hasta hacer una solicitud HTTP. </p>
                        <hr />
                        <h1>JSON</h1>
                        <p>JSON (acrónimo de JavaScript Object Notation, «notación de objeto de JavaScript») es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera (año 2019) un formato independiente del lenguaje.</p>
                        <hr />
                        <h1>MySQL</h1>
                        <p>Es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base datos de código abierto más popular del mundo.</p>
                        <hr />
                        <h1>AWS</h1>
                        <p>Es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base datos de código abierto más popular del mundo.</p>
                        <hr />
                      </Col>
                    </Row>
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
