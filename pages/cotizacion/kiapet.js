import Link from 'next/link'
import Layout from '../../components/layout'
import Pie from '../../components/graficas/pie'
import Roadmap from '../../components/graficas/roadmap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function KiaPet() {

  const calcularCosto = function(precio){
    const phase1Oc1 = precio;
    const phase1Oc1L = phase1Oc1.toLocaleString();
    const phase1Oc1Profit = precio * .15.toLocaleString();
    const phase1Oc1ProfitL = phase1Oc1Profit.toLocaleString();
    const phase1Oc1ProfitTotal = (phase1Oc1 + phase1Oc1Profit).toLocaleString();
    const phase1Oc1ProfitTotalL = phase1Oc1ProfitTotal.toLocaleString();

    return (
      <>
        <td className="text-center">${phase1Oc1L}.00</td>
        <td className="text-center">${phase1Oc1ProfitL}.00</td>
        <td className="text-center">${phase1Oc1ProfitTotalL}.00</td>
      </>
    )
  }

  const total1 = function(valor1, valor2, valor3, valor4){
    const eltotal = valor1 + valor2 + valor3 + valor4;
    const eltotalL = eltotal.toLocaleString();
    const eltotalProfit = eltotal * .15.toLocaleString();
    const eltotalProfitL = eltotalProfit.toLocaleString();
    const eltotalProfitTotal = (eltotal + eltotalProfit).toLocaleString();
    const eltotalProfitTotalL = eltotalProfitTotal.toLocaleString();
    return(
      <>
      <td className="text-center"><b>${eltotalL}.00</b></td>
      <td className="text-center">${eltotalProfitL}.00</td>
      <td className="text-center" style={{background: '#F05829', color: '#fff'}}>${eltotalProfitTotalL}.00</td>
      </>
    )
  }

  const total2 = function(valor1, valor2){
    const eltotal = valor1 + valor2;
    const eltotalL = eltotal.toLocaleString();
    const eltotalProfit = eltotal * .15.toLocaleString();
    const eltotalProfitL = eltotalProfit.toLocaleString();
    const eltotalProfitTotal = (eltotal + eltotalProfit).toLocaleString();
    const eltotalProfitTotalL = eltotalProfitTotal.toLocaleString();
    return(
      <>
      <td className="text-center"><b>${eltotalL}.00</b></td>
      <td className="text-center">${eltotalProfitL}.00</td>
      <td className="text-center" style={{background: '#F05829', color: '#fff'}}>${eltotalProfitTotalL}.00</td>
      </>
    )
  }

  const totalYear = function(valor1){
    const eltotal = valor1 * 12;
    const eltotalL = eltotal.toLocaleString();
    return(
      eltotalL
    )
  }
  const profitSuma = function(valor1, valor2){
    const eltotal = valor1 + valor2;
    const eltotalL = eltotal.toLocaleString();
    return(
      eltotalL
    )
  }
  const profit = function(valor1, valor2){
    const eltotal = valor1 - valor2;
    const eltotalL = eltotal.toLocaleString();
    return(
      eltotalL
    )
  }

  return (
    <Layout>
      <Container fluid={true} className="cotizacion">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3 mb-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> QUOTATION KIA PET IWM <span style={{ color: '#f0582a' }}>]</span>
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
            <Link href="/cotizacion/kiapet/"><a className="btn btn-default m-0 mt-3 w-100 mb-0">ENGLISH</a></Link>
            <Link href="/cotizacion/kiapet-es/"><a className="btn btn-default m-0 mt-1 w-100">ESPAÑOL</a></Link>
          </Col>
          <Col xs={12} md={10}>
            <h3><span class="lnr lnr-chevron-right"></span> Technical and economic proposal</h3>
            <h5 className="pt-3"><b><span class="lnr lnr-plus-circle"></span> Description</b></h5>
            <hr/>
            <p><b></b>Design, develop, deploy, support, maintain and host <b>KIA Pet's platform</b>.</p>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> Requirements</b></h5>
            <hr/>
            <ul>
              <li>Redesign of the <b>KIA Pets</b>, taking on account the preference of being able to get information from our existing platform</li>
              <li>Redesign of the Corporate microsites with two different quotes: With KIA dealers  & Without KIA dealers</li>
              <li>CMS implementation for content management for each section</li>
              <li>Siebel Connection  or a New CRM platform</li>
              <li>Connection to Cetelem’s API, in which we obtain the data for the finance estimates in our finance calculator</li>
              <li>Safety (Hosting Provider, Maintenance, Constant BACKUP, Safety against attacks: DDOS, SQL INYECTION, XSS, etc.)</li>
              <li>Integration of complementary developments we have currently working on</li>
              <li>Connection to “Aparta tu KIA” in each model showroom link</li>
              <li>Integration of the Chatbot that’s currently live on the official site</li>
              <li>Integration of Streaming and Live Chat (working progress)</li>
              <li>Integration of our Virtual Showroom "KIA Virtual experience"</li>
            </ul>
            <p>The Google Tag Manager implementation on all our sites is very important for campaign purposes, so it is of high importance to have the tagging system in mind for the platform development.</p>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> Integration</b></h5>
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
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Equipo de desarrollo</h5>
            <hr/>
            <ul>
              <li><b>DESIGNER</b>: User Experience (UX), User Interface (UI).</li>
              <li><b>FRONTEND DEVELOPER SR.</b>: Development in HTML5 / Node / React.</li>
              <li><b>BACKEND DEVELOPER SR.</b>: Development in Node / React.</li>
            </ul>
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> KIA PETS SITE</h4>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Technical and economic proposal</h5>
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
                  <th className="text-center" style={{background: '#ff0000', color: '#fff'}}>DD TEAM PROFIT AGENCIA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>WEB Development</td>
                  <td>Online service software for customers and visitors of the different KMM web platforms.</td>
                  {calcularCosto(150000)}
                  <td>$35,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Administration module</td>
                  <td>Module for the registration, cancellation and changes of users or agents to interact / operate in the livechat.</td>
                  {calcularCosto(70000)}
                  <td>$20,000.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  {total1(150000, 130000, 70000, 50000)}
                  <td className="text-center" style={{background: '#FF0000', color: '#fff'}}>$55,000.00</td>
                </tr>
                <tr>
                  <td className="text-right" colSpan="6"><b>TOTAL PROFIT DEVELOPING WITH DD TEAM:</b></td>
                  <th className="text-center" style={{background: '#ff0000', color: '#fff'}}>$235,000.00</th>
                </tr>
              </tbody>
            </Table>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Monthly maintenance</h5>
            <hr/>
            
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Estimated work plan</h5>
            <p>* 2 Weeks</p>
            <hr/>
            
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Activities</th>
                  <th scope="col" colSpan="4">March</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Frontend Design</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                </tr>
                <tr>
                  <th scope="row">Backend / Infrastructure development and implementation</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                </tr>
              </tbody>
            </table>
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> PHASE 2 - VIDEO CHAT</h4>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> <b>IMPORTANT NOTES</b></h5>
            <hr/>
            <ul>
              <li><b>No other development is included that is not within what is described above</b>.</li>
              <li>The development and release time of the components in this proposal from 4 months from the formal acceptance thereof.</li>
              <li>In case of acceptance of this proposal, it will be necessary to jointly define, or confirm the proposed business rules under which the platforms will operate (eg, for how long will it be reserved before making it available again, a car without receiving the payment of section ; or, how many email notifications the user should receive during the process and section payment).</li>
              <li>Economic proposal valid for 30 calendar days from the date hereof. Prices without VAT. Travel expenses are not included if required.</li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Layout>
    
  )
}

export default KiaPet;