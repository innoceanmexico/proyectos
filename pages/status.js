import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Status() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container style={{ marginBottom: '90px'}}>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> FORMATO SEGUIMIENTO DE STATUS DE PROYECTOS <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
            <p>El objetivo no es solo gestionar un proyecto hasta su finalización, sino también garantizar que el equipo esté alineado con lo que se debe hacer, quién lo debe hacer y cuándo.</p>
            <p>El por qué es igualmente importante, por lo que el equipo tiene una idea de la misión y acepta los criterios generales de éxito. El contexto es el rey y debe establecerse desde el principio. En última instancia, como DPM, usted es el entrenador que reúne a un equipo de expertos y es extremadamente importante proporcionar los detalles necesarios para preparar al equipo para el éxito.</p>
            <Row>
              <Col>
                <hr/>
                <h3>1. Contexto</h3>
                <hr/>
                <p>Describe la <b>visión estratégica, las metas y los objetivos e idealmente incluye una declaración de misión de alto nivel</b>. Esto ayudará a alinear al equipo en el enfoque y a tener en cuenta estos objetivos durante la solución. También ayudará a definir el trabajo adicional y las posibles mejoras del proyecto, ya que el equipo tiene el contexto en mente.</p>
              </Col>
              <Col>
              <hr/>
                <h3><span class="lnr lnr-chevron-down"></span> Ideal Data</h3>
              <hr/>
              <Form>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> Why is the client pursuing this project?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> What’s the problem to be solved?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> What’s the project about?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> Are there purely technical drivers or is it rooted in the overall organizational strategy?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> What are the business goals?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> How is success defined?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> Are there metrics defined that will measure success in the end?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button variant="secondary" type="submit" className="float-right">
                  ENVIAR DATOS
                </Button>
              </Form>
              </Col>
            </Row>

            <Row>
              <Col>
                <hr/>
                <h3>2. Project Parameters</h3>
                <hr/>
                <p>The goal is to enable all the people involved to work together to deliver your project, so outlining the plan in your project initiation document to the team is just as important as outlining the scope.</p>
              </Col>
              <Col>
              <hr/>
                <h3><span class="lnr lnr-chevron-down"></span> Ideal Data</h3>
              <hr/>
              <Form>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> Why is the client pursuing this project?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> What’s the problem to be solved?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> What’s the project about?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> Are there purely technical drivers or is it rooted in the overall organizational strategy?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> What are the business goals?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> How is success defined?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label><span class="lnr lnr-arrow-right"></span> Are there metrics defined that will measure success in the end?</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button variant="secondary" type="submit" className="float-right">
                  ENVIAR DATOS
                </Button>
              </Form>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Status;