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
          <Col>
            <h2 className="mt-3">
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
          </Col>
          <Col xs={9}>
            <h3><span class="lnr lnr-chevron-right"></span> Propuesta técnica y económica</h3>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Descripción</h5>
            <hr/>
            <p>Diseñar, desarrollar, desplegar, dar soporte, mantenimiento y hospedaje a un chat en vivo (live chat) para KMM integrado con sus diferentes plataformas web (kia.com/mxy apartatukia.com) u operativas (DP o CRM Siebel). El live chat tendrá como objetivo principal la interacción de los visitantes de KMM con un pool de agentes del corporativo o de la red de dealers mediante mensajes de texto y video conferencias en vivo.</p>
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
                  <li><b>BACKEND</b>: NodeJS, MongoDB/SQL</li>
                </ul>
              </li>
            </ul>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Propuesta técnica y económica para la <b>Fase 1 - CHAT TEXTO</b></h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPTO</th>
                  <th>DESCRIPCIÓN</th>
                  <th>PRECIO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Live chat</td>
                  <td>Software de atención online a clientes y visitantes de las diferentes plataformas web de KMM.</td>
                  <td>$310,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Módulo de administración</td>
                  <td>Módulo para  las  altas,  bajas  y  cambios  de  los  usuarios o agentes a interactuar/operaren el livechat.</td>
                  <td>$150,000.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Integraciones</td>
                  <td>Integraciones con las siguientes plataformas:
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
                  <td>Dashboard analítico para medición y seguimiento delos principales indicadores operativos de la plataforma.</td>
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
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Propuesta técnica y económica para la <b>Fase 2 - CHAT VIDEO</b></h5>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Livechat;