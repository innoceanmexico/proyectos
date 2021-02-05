import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function LivechatEs() {
  return (
    <Layout>
      <Container className="cotizacion">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3 mb-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> COTIZACIÓN LIVE CHAT <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            
            <hr />
          </Col>
        </Row>
        <Row style={{ marginBottom: '90px'}}>
          <Col className="mt-2">
            <div align="center">
              <img src="/images/logo.png" alt="" alt="" />
            </div>
            <Link href="/cotizacion/livechat/"><a className="btn btn-default mt-3 w-100 mb-0">ENGLISH</a></Link>
            <Link href="/cotizacion/livechat-es/"><a className="btn btn-default w-100">ESPAÑOL</a></Link>
          </Col>
          <Col xs={12} md={9}>
            <h3><span class="lnr lnr-chevron-right"></span> Propuesta técnica y económica</h3>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Descripción</h5>
            <hr/>
            <p>Diseñar, desarrollar, desplegar, dar soporte, mantenimiento y hospedaje a un chat en vivo (live chat) para KMM integrado con sus diferentes plataformas web (www.kia.com y www.apartatukia.com) u operativas (DP o CRM Siebel). El live chat tendrá como objetivo principal la interacción de los visitantes de KMM con un pool de agentes del corporativo o de la red de dealers mediante mensajes de texto y video conferencias en vivo.</p>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Características generales del componente</h5>
            <hr/>
            <ul>
              <li><b>PLATAFORMA</b>: Componente para implementar en plataforma web</li>
              <li><b>DISEÑO</b>: De acuerdo con identidad corporativa de la marca.</li>
              <li><b>INTEGRACIONES</b>: con CRM, DP, Kia.com/mx y apartatukia.com</li>
              <li><b>IDIOMAS</b>: Español / Inglés</li>
              <li><b>LENGUAJES DE DESARROLLO</b>:
                <ul>
                  <li><b>FRONTEND</b>: HTML5, CSS3, Javascript, ReactJS/NextJS</li>
                  <li><b>BACKEND</b>: AWS, NodeJS, MongoDB/SQL</li>
                  <li><b>VIDEO</b>: WebSockets, WebRTC(peerjs)</li>
                </ul>
              </li>
            </ul>
            <hr/>
            <img src="/images/kia/live-chat.jpg" className="img-fluid" alt="INNOCEAN MÉXICO" tittle="INNOCEAN MÉXICO" />
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Equipo de desarrollo</h5>
            <hr/>
            <ul>
              <li><b>DESIGNER</b>: User Experience (UX), User Interface (UI)</li>
              <li><b>FRONTEND DEVELOPER SR.</b>: Desarrollo en HTML5/Node/React.</li>
              <li><b>BACKEND DEVELOPER SR.</b>: Desarrollo en Node/React.</li>
              <li><b>DevOps</b>: Levantamiento de infraestructura (servers, BD, IP, Dominio y Licencias)</li>
              <li><b>QA Tester:</b>: Pruebas de calidad en ambiente de pruebas</li>
            </ul>
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> FASE 1 - CHAT TEXTO</h4>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Propuesta técnica y económica para la <b>Fase 1 - CHAT TEXTO</b></h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPT</th>
                  <th>DESCRIPTION</th>
                  <th className="text-center">Original Cost MXN</th>
                  <th className="text-center">IWN Profit MXN</th>
                  <th style={{background: '#F05829', color: '#fff'}} className="text-center">Cost including IWN Gain MXN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Live chat</td>
                  <td>Online service software for customers and visitors of the different KMM web platforms.</td>
                  <td className="text-center">$310,000.00</td>
                  <td className="text-center">$37,200.00</td>
                  <td className="text-center">$347,200.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Administration module</td>
                  <td>Module for the registration, cancellation and changes of users or agents to interact / operate in the livechat.</td>
                  <td className="text-center">$150,000.00</td>
                  <td className="text-center">$18,000.00</td>
                  <td className="text-center">$168,000.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Integrations</td>
                  <td>Integrations with the following platforms:
                    <ul>
                      <li>kia.com/mx</li>
                      <li>apartatukia.com</li>
                      <li>Dealer portal</li>
                      <li>Sistemas CRM</li>
                    </ul>
                  </td>
                  <td className="text-center">$90,000.00</td>
                  <td className="text-center">$10,800.00</td>
                  <td className="text-center">$100,800.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dashboard</td>
                  <td>Analytical dashboard for measurement and monitoring of the main operational indicators of the platform.</td>
                  <td className="text-center">$100,000.00</td>
                  <td className="text-center">$12,000.00</td>
                  <td className="text-center">$112,000.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$650,000.00</b></td>
                  <td className="text-center">$78,000.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$728,000.00</td>
                </tr>
              </tbody>
            </Table>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Monthly maintenance</h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPT</th>
                  <th>DESCRIPTION</th>
                  <th className="text-center">Original Cost MXN</th>
                  <th className="text-center">IWN Profit MXN</th>
                  <th style={{background: '#F05829', color: '#fff'}} className="text-center">Cost including IWN Gain MXN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Infrastructure for hosting the platform</td>
                  <td>Infrastructure required and optimized to assemble the technological components of the campaign. Servers, Databases, Firewalls and security certificates are included to host the platform under a Cloud scheme. (Estimated for unlimited concurrent users).</td>
                  <td className="text-center">$20,000.00</td>
                  <td className="text-center">$2,400.00</td>
                  <td className="text-center">$22,400.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Operation and support</td>
                  <td>Support and operation activities to keep the platform in optimal operations.</td>
                  <td className="text-center">$7,500.00</td>
                  <td className="text-center">$900.00</td>
                  <td className="text-center">$8,400.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$27,500.00</b></td>
                  <td className="text-center">$3,300.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$30,800.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL COST FOR 1 YEAR</b></td>
                  <td className="text-center"><b>$330,000.00</b></td>
                  <td className="text-center">$39,600.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$369,600.00</td>
                </tr>
              </tbody>
            </Table>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center" colSpan="2">Total cost of the project</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total cost of the project (development and 1 year maintenance with no IWWM gain) </td>
                  <td className="text-center">$980,000.00</td>
                  <td className="text-center" style={{background: '#111', color: '#fff', fontWeight: 'bold'}}>$1,097,600.00</td>
                </tr>
                <tr>
                  <td>Total IWWM gain (development and 1 year maintenance)</td>
                  <td className="text-center"></td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff', fontWeight: 'bold'}}>$117,600.00</td>
                </tr>
                <tr>
                  <td>Total IWWM gain (percentage, total project) </td>
                  <td className="text-center"></td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff', fontWeight: 'bold'}}>12%</td>
                </tr>
              </tbody>
            </Table>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Plan estimado de trabajo</h5>
            <p>* 6 Semanas aproximadamente</p>
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
                  <th scope="row">Desarrollo e implementación de Backend/Infraestructura</th>
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
                  <th scope="row">Pruebas finales y ajustes</th>
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
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> FASE 2 - CHAT VIDEO</h4>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Propuesta técnica y económica para la <b>Fase 2 - CHAT VIDEO</b></h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPT</th>
                  <th>DESCRIPTION</th>
                  <th className="text-center">Original Cost MXN</th>
                  <th className="text-center">IWN Profit MXN</th>
                  <th style={{background: '#F05829', color: '#fff'}} className="text-center">Cost including IWN Gain MXN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Live chat video</td>
                  <td>Implementation of the ability to transmit live-streaming video.</td>
                  <td>$250,000.00</td>
                  <td className="text-center">$30,000.00</td>
                  <td className="text-center">$280,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Integraciones</td>
                  <td>Integrations with the following platforms:
                    <ul>
                      <li>kia.com/mx</li>
                      <li>apartatukia.com</li>
                      <li>Dealer portal</li>
                      <li>Sistemas CRM</li>
                    </ul>
                  </td>
                  <td>$90,000.00</td>
                  <td className="text-center">$10,800.00</td>
                  <td className="text-center">$100,800.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dashboard</td>
                  <td>Analytical dashboard for measurement and monitoring of the main operational indicators of the platform.</td>
                  <td>$100,000.00</td>
                  <td className="text-center">$1,200.00</td>
                  <td className="text-center">$101,200.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$440,000.00</b></td>
                  <td className="text-center"><b>$42,000.00</b></td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}><b>$482,000.00</b></td>
                </tr>
              </tbody>
            </Table>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Plan estimado de trabajo</h5>
            <p>* 1 Mes aproximadamente</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Actividades</th>
                  <th scope="col" colSpan="4">Abril</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Diseño de Frontend</th>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Desarrollo e implementación de Backend/Infraestructura</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                </tr>
              </tbody>
            </table>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> <b>IMPORTANT NOTES</b></h5>
            <hr/>
            <ul>
              <li>El tiempo de desarrollo y liberación de los componentes en la presente propuesta desde 4 meses a partir de la aceptación formal de la misma.</li>
              <li>En caso de aceptación de la presente propuesta será necesario definir en conjunto, o confirmar las reglas de negocio propuestas bajo las que operarán las plataformas(ej. por cuanto tiempo quedará reservado antes  de volver  a ponerlo  disponible, un  automóvil sin  recibir  el  pago  de apartado;  o, cuantas notificaciones por correo electrónico deberá recibir el usuario durante el procesos y pago de apartado).</li>
              <li>Propuesta económica valida por 30días naturales a partir de la fecha de la presente.Precios sinIVA. No se incluyen viáticos en caso de requerirse.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default LivechatEs;