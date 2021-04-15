import Layout from '../../components/layout'
import NavbarPrincipal from '../../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Calculator() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container style={{ marginBottom: '90px' }}>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> INNOCEAN FTE's CALCULATOR <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
            <h2><span className="lnr lnr-chevron-right"></span> Salarios relacionados </h2>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>MEDIA SALARIAL</h4>
            <p><small>240 horas mensuales promedio</small></p>
            <hr/>
            <Row>
              <Col><h5>Desarrollador Java</h5></Col>
              <Col>
                <p>Media salarial</p>
                <h3>$ 22,950.00<span style={{fontSize: '10px'}}> al mes</span></h3>
                <p><small>$ 95.62 POR HORA</small></p>
                <p>2,451 Salarios</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col><h5>Programador/a</h5></Col>
              <Col>
                <p>Media salarial</p>
                <h3>$ 14,753.00<span style={{fontSize: '10px'}}> al mes</span></h3>
                <p><small>$ 61.47 POR HORA</small></p>
                <p>1,578 Salarios</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col><h5>Desarrollo</h5></Col>
              <Col>
                <p>Media salarial</p>
                <h3>$ 11,303.00<span style={{fontSize: '10px'}}> al mes</span></h3>
                <p><small>$ 47.09 POR HORA</small></p>
                <p>1,342 Salarios</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col><h5>Developer</h5></Col>
              <Col>
                <p>Media salarial</p>
                <h3>$ 33,480.00<span style={{fontSize: '10px'}}> al mes</span></h3>
                <p><small>$ 139.50 POR HORA</small></p>
                <p>1,060 Salarios</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col><h5>Soporte</h5></Col>
              <Col>
                <p>Media salarial</p>
                <h3>$ 12,370.00<span style={{fontSize: '10px'}}> al mes</span></h3>
                <p><small>$ 51.54 POR HORA</small></p>
                <p>955 Salarios</p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col><h5>Desarrollador WEB</h5></Col>
              <Col>
                <p>Media salarial</p>
                <h3>$ 17,656.00<span style={{fontSize: '10px'}}> al mes</span></h3>
                <p><small>$ 73.56 POR HORA</small></p>
                <p>647 Salarios</p>
              </Col>
            </Row>
            <hr/>
          </Col>
          <Col>
            <h4>CALCULADORA</h4>
            <p><small>Calcular valor unitario</small></p>
            <hr/>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>TIPO:</Form.Label>
                <Form.Control as="select">
                  <option value="22950">Desarrollador Java</option>
                  <option value="14753">Programador/a</option>
                  <option value="11303">Desarrollo</option>
                  <option value="33480">Developer</option>
                  <option value="12370">Soporte</option>
                  <option value="17656">Desarrollador WEB</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>HORAS:</Form.Label>
                <Form.Control type="number" placeholder="Ingresar horas" />
              </Form.Group>
              <Button variant="primary" type="submit">
                CALCULAR FTE
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>

  )
}

export default Calculator;