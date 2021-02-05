import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function Livechat() {
  return (
    <Layout>
      <Container className="cotizacion">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> QUOTATION LIVE CHAT <span style={{ color: '#f0582a' }}>]</span>
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
            <Link href="/cotizacion/livechat/"><a className="btn btn-default mt-3">ENGLISH</a></Link>
            <Link href="/cotizacion/livechat-es/"><a className="btn btn-default mt-3">ESPAÑOL</a></Link>
          </Col>
          <Col xs={12} md={9}>
            <h3><span class="lnr lnr-chevron-right"></span> Technical and economic proposal</h3>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Description</h5>
            <hr/>
            <p>Design, develop, deploy, support, maintain and host a live chat for KMM integrated with its different web platforms (www.kia.com and www.apartatukia.com) or operational (DP or CRM Siebel) . The main objective of the live chat will be the interaction of KMM's visitors with a pool of corporate agents or the dealer network through text messages and live video conferences.</p>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> General characteristics of the chat component</h5>
            <hr/>
            <ul>
              <li><b>PLATFORM</b>: Component to implement in web platform.</li>
              <li><b>DESIGN</b>: In accordance with the corporate identity of the brand.</li>
              <li><b>INTEGRATIONS</b>: with CRM, DP, Kia.com/mx and apartatukia.com.</li>
              <li><b>LANGUAGES</b>: Spanish / English / Korean</li>
              <li><b>DEVELOPMENT LANGUAGES</b>:
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
              <li><b>DESIGNER</b>: User Experience (UX), User Interface (UI).</li>
              <li><b>FRONTEND DEVELOPER SR.</b>: Development in HTML5 / Node / React.</li>
              <li><b>BACKEND DEVELOPER SR.</b>: Development in Node / React.</li>
              <li><b>DevOps</b>: Infrastructure survey (servers, DB, IP, Domain and Licenses).</li>
              <li><b>QA Tester:</b>: Quality testing in testing environment.</li>
            </ul>
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> PHASE 1 - CHAT TEXT</h4>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Technical and economic proposal for <b>PHASE 1 - CHAT TEXT</b></h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPT</th>
                  <th>DESCRIPTION</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Live chat</td>
                  <td>Online service software for customers and visitors of the different KMM web platforms.</td>
                  <td>$310,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Administration module</td>
                  <td>Module for the registration, cancellation and changes of users or agents to interact / operate in the livechat.</td>
                  <td>$150,000.00</td>
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
                  <td>$90,000.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dashboard</td>
                  <td>Analytical dashboard for measurement and monitoring of the main operational indicators of the platform.</td>
                  <td>$100,000.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td><b>$650,000.00</b></td>
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
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Infrastructure for hosting the platform</td>
                  <td>Infrastructure required and optimized to assemble the technological components of the campaign. Servers, Databases, Firewalls and security certificates are included to host the platform under a Cloud scheme. (Estimated for unlimited concurrent users).</td>
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Operation and support</td>
                  <td>Support and operation activities to keep the platform in optimal operations.</td>
                  <td>$7,500.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td><b>$27,500.00</b></td>
                </tr>
              </tbody>
            </Table>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Estimated work plan</h5>
            <p>* 6 Weeks</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Activities</th>
                  <th scope="col" colSpan="4">February</th>
                  <th scope="col" colSpan="4">March</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Frontend Design</th>
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
                  <th scope="row">Backend / Infrastructure development and implementation</th>
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
                  <th scope="row">Creation and integration of Web Services and API's</th>
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
                  <th scope="row">CMS development</th>
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
                  <th scope="row">Integration with CRM</th>
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
                  <th scope="row">Final tests and adjustments</th>
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
            <h4><span class="lnr lnr-arrow-right"></span> PHASE 2 - VIDEO CHAT</h4>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Technical and economic proposal for <b>PHASE 2 - VIDEO CHAT</b></h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPT</th>
                  <th>DESCRIPTION</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Live chat video</td>
                  <td>Implementation of the ability to transmit live-streaming video.</td>
                  <td>$250,000.00</td>
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
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dashboard</td>
                  <td>Analytical dashboard for measurement and monitoring of the main operational indicators of the platform.</td>
                  <td>$100,000.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td><b>$440,000.00</b></td>
                </tr>
              </tbody>
            </Table>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Estimated work plan</h5>
            <p>* 4 weeks approximately</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Activities</th>
                  <th scope="col" colSpan="4">April</th>
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
                  <th scope="row">Backend / Infrastructure development and implementation</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                </tr>
              </tbody>
            </table>
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

export default Livechat;