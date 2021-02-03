import Layout from '../components/layout'
import Link from 'next/link'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Santaanita() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> PROYECTO SANTA ANITA <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row style={{ marginBottom: '90px'}}>
          <Col>
            <div align="center">
              <img src="images/logo-santaanita_negro.png" alt="" alt="" />
            </div>
          </Col>
          <Col xs={12} md={10}>
            <h5><span class="lnr lnr-arrow-right"></span> INTRODUCCIÓN</h5>
            <hr/>
            <p>Desarrollo de propuesta de diseño de estrategia digital para plataforma web de la marca <b>SANTA ANITA</b>.</p>
            <p>LINK:  
              <Link href="https://santaanita.com.mx/">
                <a target="_blank">
                  https://www.santaanita.com.mx/
                </a>
              </Link>
            </p>
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> PROPUESTA</h4>
            <hr/>
            <h5 className="tagger"><span class="lnr lnr-arrow-right"></span> HEADER</h5>
            <hr/>
            <p><span class="lnr lnr-arrow-right-circle"></span> ANTERIOR</p>
            <img src="images/santaanita/header-v.jpg" className="img-fluid" />
            <hr/>
            <p><span class="lnr lnr-arrow-right-circle"></span> PROPUESTA</p>
            <img src="images/santaanita/header-n.jpg" className="img-fluid" />
            <hr/>
            <h4><span class="lnr lnr-chevron-right"></span> JUSTIFICACIÓN</h4>
            <p>Eliminar elementos innecesarios, simplificando la lectura y navegación del usuario.</p>
            <hr/>
            <h5 className="tagger"><span class="lnr lnr-arrow-right"></span> SECCIÓN "STYLE"</h5>
            <hr/>
            <Row>
              <Col>
              <p><span class="lnr lnr-arrow-right-circle"></span> ANTERIOR</p>
              <img src="images/santaanita/style-v.jpg" className="img-fluid" />
              </Col>
              <Col>
              <p><span class="lnr lnr-arrow-right-circle"></span> PROPUESTA</p>
              <img src="images/santaanita/style-n.jpg" className="img-fluid" />
              </Col>
            </Row>
            <hr/>
            <h4><span class="lnr lnr-chevron-right"></span> JUSTIFICACIÓN</h4>
            <p>Eliminar elemento considerando tiempo de carga (carga de 30 slides) y valor de información en función del usuario.</p>
            <hr/>
            <h5 className="tagger"><span class="lnr lnr-arrow-right"></span> SECCIÓN "ENCUENTRA TU ESTILO"</h5>
            <hr/>
            <Row>
              <Col>
              <p><span class="lnr lnr-arrow-right-circle"></span> ANTERIOR</p>
              <img src="images/santaanita/inspirando-v.jpg" className="img-fluid" />
              </Col>
              <Col>
              <p><span class="lnr lnr-arrow-right-circle"></span> PROPUESTA</p>
              <img src="images/santaanita/inspirando-n.jpg" className="img-fluid" />
              </Col>
            </Row>
            <hr/>
            <h4><span class="lnr lnr-chevron-right"></span> JUSTIFICACIÓN</h4>
            <p>Alinear con slogan del loader.</p>
            <hr/>
            <h5 className="tagger"><span class="lnr lnr-arrow-right"></span> SECCIÓN FOOTER</h5>
            <hr/>
            <p><span class="lnr lnr-arrow-right-circle"></span> ANTERIOR</p>
            <img src="images/santaanita/footer-v.jpg" className="img-fluid" />
            <hr/>
            <p><span class="lnr lnr-arrow-right-circle"></span> PROPUESTA</p>
            <img src="images/santaanita/footer-n.jpg" className="img-fluid" />
            <hr/>
            <h4><span class="lnr lnr-chevron-right"></span> JUSTIFICACIÓN</h4>
            <p>Distribuir de una manera mas ordenada los elementos categorizando las diferentes secciones.</p>
            <hr/>
            <h5 className="tagger"><span class="lnr lnr-arrow-right"></span> SECCIÓN PRODUCTO</h5>
            <hr/>
            <Row>
              <Col>
              <p><span class="lnr lnr-arrow-right-circle"></span> ANTERIOR</p>
              <img src="images/santaanita/producto-v.jpg" className="img-fluid" />
              </Col>
              <Col>
              <p><span class="lnr lnr-arrow-right-circle"></span> PROPUESTA</p>
              <img src="images/santaanita/producto-n.jpg" className="img-fluid" />
              </Col>
            </Row>
            <hr/>
            <h4><span class="lnr lnr-chevron-right"></span> JUSTIFICACIÓN</h4>
            <p>Distribuir y acentuar elementos con los que el usuario puede interactuar.</p>
            <hr/>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Santaanita;