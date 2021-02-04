import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function Status() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container style={{ marginBottom: '90px' }}>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> FORMATO SEGUIMIENTO DE STATUS DE PROYECTOS <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
            <p>El objetivo no es solo gestionar un proyecto hasta su finalización, sino también garantizar que el equipo esté alineado con lo que se debe hacer, quién lo debe hacer y cuándo.</p>
            <p>El por qué es muy importante, por lo que el equipo tiene una idea de la misión y acepta los criterios generales de éxito. El contexto es el rey y debe establecerse desde el principio. En última instancia, como DPM, usted es el entrenador que reúne a un equipo de expertos y es extremadamente importante proporcionar los detalles necesarios para preparar al equipo para el éxito.</p>
            <Row>
              <Col>
                <hr />
                <h3>1. Contexto</h3>
                <hr />
                <p>Describe la <b>visión estratégica, las metas y los objetivos e idealmente incluye una declaración de misión de alto nivel</b>. Esto ayudará a alinear al equipo en el enfoque y a tener en cuenta estos objetivos durante la solución. También ayudará a definir el trabajo adicional y las posibles mejoras del proyecto, ya que el equipo tiene el contexto en mente.</p>
              </Col>
              <Col>
                <hr />
                <h3><span class="lnr lnr-chevron-down"></span> Ideal Data</h3>
                <hr />
                <Form>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Por qué el cliente persigue este proyecto?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Cuál es el problema a resolver?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> De qué trata el proyecto?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Hay impulsores puramente técnicos o está arraigado en la estrategia organizacional general?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Cuáles son los objetivos comerciales?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Hay métricas definidas que medirán el éxito al final?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col>
                <hr />
                <h3>2. Parámetros del proyecto</h3>
                <hr />
                <p>El objetivo es permitir que todas las personas involucradas trabajen juntas para entregar su proyecto, por lo que describir el plan en el documento de inicio del proyecto para el equipo es tan importante como delinear el alcance.</p>
              </Col>
              <Col>
                <hr />
                <h3><span class="lnr lnr-chevron-down"></span> Ideal Data</h3>
                <hr />
                <Form>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Cuál es el <b>presupuesto de este proyecto</b>?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Cómo se <b>desglosa el presupuesto</b>?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Cómo se ve la <b>línea de tiempo</b>?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Cómo imagina la <b>colaboración con el cliente</b>?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Cuál es el <b>primer objetivo hacia el que trabajará el equipo</b>?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col>
                <hr />
                <h3>3. Definir/Delimitar los detalles</h3>
                <hr />
                <p>Definir los detalles del proyecto. El equipo debe comprender qué se debe hacer y entregar exactamente para que este proyecto sea un éxito.</p>
              </Col>
              <Col>
                <hr />
                <h3><span class="lnr lnr-chevron-down"></span> Ideal Data</h3>
                <hr />
                <Form>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Qué está dentro y fuera del alcance?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Hay algunos requisitos iniciales del proyecto que ya están definidos?</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label><span class="lnr lnr-arrow-right"></span> Cuáles son los límites del proyecto que el equipo no debe cruzar?</Form.Label>
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
                <hr />
                <h3>4. Definir la estructura de desglose del proyecto y el plan de recursos</h3>
                <hr />
                <p>Para asegurarse de que el equipo tenga claro cómo se crean los entregables, es esencial dividir el trabajo en partes más pequeñas y crear un desglose del proyecto que incluya las asignaciones. Muestra cómo se unen los entregables y quién trabajará en qué con quién.</p>
                <p>Es de gran valor dirigir al equipo a través de la planificación general aproximada y la estructura de desglose de recursos del proyecto, para que los miembros del equipo puedan intervenir y ayudarlo a optimizar. Al ejecutar al equipo a través de la planificación real, las dependencias se aclararán y el equipo será parte del plan. También ayuda a la comprensión y la responsabilidad generales del proyecto. Estos desgloses pueden variar en detalle y pueden trazar las diversas actividades en cada fase. También pueden conectarse a fechas específicas y vincularse a la planificación de recursos.</p>
                <hr />
                <h3><span class="lnr lnr-chevron-down"></span> Ejemplo</h3>
                <hr />
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th></th>
                      <th>ETAPA</th>
                      <th>ENTREGABLES</th>
                      <th>RECURSOS Y HORAS</th>
                      <th>FECHA DE ENTREGA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Kick Off</td>
                      <td>SOW Contact Report</td>
                      <td>Recurso 1 (3h.), Recurso 2(1h.)</td>
                      <td>12/03/2021</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Kick Off</td>
                      <td>SOW Contact Report</td>
                      <td>Recurso 1 (3h.), Recurso 2(1h.)</td>
                      <td>12/03/2021</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Kick Off</td>
                      <td>SOW Contact Report</td>
                      <td>Recurso 1 (3h.), Recurso 2(1h.)</td>
                      <td>12/03/2021</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col>
                <hr />
                <h3>5. Definir quién es quién</h3>
                <hr />
                <p>Un aspecto importante del documento de inicio del proyecto es la estructura general del equipo del proyecto, tanto interna como externamente. ¿Quién está trabajando en el equipo? Quién puede aprobar las cosas antes de que lleguen a un cliente. ¿A quién del lado del cliente se debe consultar antes de firmar? Establecer esto ayudará a evitar malentendidos y le dará una idea de cuán complejas serán las firmas.</p>
                <p>Una excelente manera de indicar estas dependencias en el proyecto es un gráfico RACI. Describe quién es / debe ser:</p>
                <ul>
                  <li><b>Responsable</b> - ¿Quién hace el trabajo?</li>
                  <li><b>Responsable</b> - ¿Quién toma las decisiones?</li>
                  <li><b>Consultado</b> - ¿A quién hay que preguntar antes de continuar?</li>
                  <li><b>Informado</b> - ¿Quién debe mantenerse informado?</li>
                </ul>
                <hr />
                <img src="images/RACI.jpg" alt="" title="" className="img-fluid" />
              </Col>
            </Row>

            <Row>
              <Col>
                <hr />
                <h3>6. Identificar riesgos, suposiciones, problemas y dependencias</h3>
                <hr />
                <p>Por último, pero no menos importante, incluir una descripción general de los riesgos y limitaciones conocidos en el PID. Los proyectos pueden ser complejos por diferentes razones y siempre es útil pensar en ello y anticipar algunos de los riesgos y problemas del proyecto y elaborar estrategias de mitigación.</p>
                <h3>Ejemplos:</h3>
                <ul>
                  <li>Líneas de tiempo demasiado cortas o demasiado largas</li>
                  <li>Limitaciones presupuestarias</li>
                  <li>Conocimientos técnicos</li>
                  <li>Panorama de las partes interesadas</li>
                  <li>Punto único de fallas</li>
                </ul>
              </Col>
              <Col>
                <hr />
                <h3><span class="lnr lnr-chevron-down"></span> Ideal Data</h3>
                <hr />
                <img src="images/desglose.jpg" alt="" title="" className="img-fluid" />
              </Col>
            </Row>

            <Row>
              <Col>
                <hr />
                <h3>PROPUESTA DOCUMENTO IMPRESO</h3>
                <hr />
                <img src="images/PRESUPUESTO.jpg" alt="" title="" className="img-fluid" />
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </Layout>

  )
}

export default Status;