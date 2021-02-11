import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function KiacareersEs() {
  return (
    <Layout>
      <Container className="cotizacion">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3 mb-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> KIA MOTORS MÉXICO CAREERS <span style={{ color: '#f0582a' }}>]</span>
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
            <Link href="/cotizacion/kiacareers/"><a className="btn btn-default m-0 mt-3 w-100 mb-0">ENGLISH</a></Link>
            <Link href="/cotizacion/kiacareers-es/"><a className="btn btn-default m-0 mt-1 w-100">ESPAÑOL</a></Link>
          </Col>
          <Col xs={12} md={10}>
            <h3><span class="lnr lnr-chevron-right"></span> Propuesta técnica y económica</h3>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Descripción</h5>
            <hr/>
            <p>Desarrollar una plataforma digital dedicada a la comunicación constante con los usuarios finales del HYUNDAI, con el objetivo principal de ayudar a publicar un programa de venta de autos seminuevos mediante dealers.</p>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Plataforma</h5>
            <hr/>
            <p>La plataforma tendrá 3 secciones diferentes: Sitio web público, Sistema de vacantes de aplicaciones y Sistema de administrador de superusuarios.</p>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Sitio web público:</h5>
            <hr/>
            <ul>
              <li><b>Desarrollar un sitio web público dinámico, para mantener a los usuarios finales actualizados con información sobre la empresa y su cultura, y la opción de mostrar la información en diferentes idiomas (español, inglés, coreano)</b>
              <hr/>
                <ul>
                  <li>Este sitio web podría estar integrado en el sitio web principal de HYUNDAI mediante un IFRAME o podría residir en un dominio externo (recomendado).</li>
                  <li>Mostrar información como:</li>
                  <ul>
                    <li>Cultura organizacional</li>
                    <li>Noticias</li>
                    <li>FAQ´S</li>
                    <li>Videos
                      <ul>
                        <li>Tours virtuales</li>
                      </ul>
                    </li>
                    <li>Testimoniales</li>
                    <li>Vacantes</li>
                  </ul>
                </ul>
              </li>
              <hr/>
              <li><b>Sistema de solicitud de vacantes</b>
              <hr/>
                <ul>
                  <li>Los usuarios que deseen postularse a alguna vacante mostrada en el sitio web público, podrían crear un nuevo perfil en el Sistema de Solicitud de Vacantes y postularse de inmediato y la opción de postularse en diferentes idiomas (español, inglés, coreano)
                    <ul>
                      <li>Forma de registro</li>
                      <li>Usuario / Contraseña</li>
                      <li>Formulario de datos personales del usuario</li>
                      <li>Sistema de carga de archivos
                        <ul>
                          <li>Fotografía</li>
                          <li>Documentación</li>
                        </ul>
                      </li>
                      <li>Panel de control general para mostrar el estado actual de la vacante aplicada por el usuario</li>
                      <li>Línea de tiempo para mostrar las diferentes fases a cumplir
                        <ul>
                          <li>Requisitos necesarios para cumplir cada fase</li>
                        </ul>
                      </li>
                      <li>Prueba para aprobar por usuario en función de la vacante
                        <ul>
                          <li>Sistema generador de certificados para cada prueba realizada con éxito</li>
                        </ul>
                      </li>
                      <li>Notificación al administrador a través de la plataforma y correo electrónico</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <hr/>
              <li><b>Superusuarios administradores</b>
              <hr/>
                <ul>
                  <li>Los superusuarios / administradores tendrán acceso para gestionar cada área dentro de la plataforma</li>
                  <li>El sistema tendrá la opción de mostrar la información en 3 idiomas diferentes (inglés, español, coreano)
                    <ul>
                      <li>Los superusuarios pueden crear diferentes tipos de usuarios para diferentes propósitos.</li>
                      <li><b>Cargar y editar información en diferentes idiomas (español, inglés, coreano)</b>
                        <ul>
                          <li>Los sistemas de gestión de contenido forman el sitio web público
                            <ul>
                              <li>Gestión de subida de vídeo</li>
                              <li>Gestión de noticias</li>
                              <li>Gestión de subida e imagen</li>
                              <li>Gestión de preguntas frecuentes</li>
                              <li>Gestión de testimonios</li>
                            </ul>
                          </li>
                          <li>Administrador de usuarios
                            <ul>
                              <li>Dar acceso a diferentes áreas</li>
                              <li>Crear, actualizar y eliminar usuarios</li>
                              <li>Crear, actualizar y eliminar administradores</li>
                            </ul>
                          </li>
                          <li>Vacantes
                            <ul>
                              <li>Crear, actualizar y eliminar información de vacantes</li>
                              <li>Editora de perfil de vacantes</li>
                              <li>Sistema creador de fases dinámicas
                                <ul>
                                  <li>Asignación de gerentes para cada fase</li>
                                  <li>Definir los requisitos necesarios por fase</li>
                                  <li>Prueba el sistema de creación para cada vacante</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>Sistema de gestión de aplicaciones
                            <ul>
                              <li>Recepción</li>
                              <li>Actualizar</li>
                              <li>Aprobación
                                <ul>
                                  <li>Para la solicitud de vacante</li>
                                  <li>Para la fase de vacante</li>
                                </ul>
                              </li>
                              <li>Aplicaciones rechazadas</li>
                            </ul>
                          </li>
                          <li>Notificaciones a través de plataforma o correo electrónico</li>
                          <li>Notificaciones a través de WHATSAPP</li>
                          <li>Área de apoyo
                            <ul>
                              <li>Sección donde los administradores pueden ayudar a los usuarios finales a resolver sus dudas a través del sistema de tickets</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <hr/>
              <h5 className="naranja"><span class="lnr lnr-plus-circle"></span> Tecnología</h5>
            <hr/>
            <h6><span class="lnr lnr-arrow-right"></span> Cada área funcionará bajo un entorno desarrollado en AWS (AMAZON WEB SERVICES):</h6>
            <ul>
              <li>Inicio de sesión de seguridad de administrador y usuarios en AWS COGNITO</li>
              <li>Gestión de bases de datos en AWS DYNAMODB</li>
              <li>Acceso a los servicios a través de AWS APIGATEWAY</li>
              <li>Microservicios desarrollados en AWS LAMBDAS</li>
              <li><b>Seguridad y cifrado de datos de usuario a través de SSL</b></li>
            </ul>
            <hr/>
            <div align="center mt-3 mb-3">
              <img src="/images/kia/ssl.jpg" className="img-fluid" alt="" alt="" />
            </div>
            <hr/>
            <h6><span class="lnr lnr-arrow-right"></span> Estructura de la plataforma:</h6>
            <ul>
              <li>FRONTEND: HTML, CSS3, JAVASCRIPT
                <ul>
                  <li>FRAMEWORK REACT</li>
                </ul>
              </li>
              <li>BACKEND: <b>NODEJS</b></li>
              <li>3 Dictionaries to develop
                <ul>
                  <li>Main System Dictionary
                    <ul>
                      <li>Core System interfaces displayed in 3 different languages</li>
                    </ul>
                  </li>
                  <li>Apply System Dictionary
                    <ul>
                      <li>Core System interfaces displayed in 3 different languages</li>
                      <li>Dynamic System dictionary, for multiple components created in the main system editor such as Phases, tests, vacancies profiles </li>
                    </ul>
                  </li>
                  <li>Public Website Dictionary
                    <ul>
                      <li>Dynamic System dictionary, for multiple information uploaded in the main system editor asu as News, Virtual Tours, Vacancies</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h6><b><span class="lnr lnr-arrow-right"></span> Constant DATABASE BACKUP for the last 30 days:</b></h6>
            <hr/>
            <h3 className="naranja"><span class="lnr lnr-arrow-right"></span> Phases</h3>
            <hr/>
            <ul>
              <li><b>KICKOFF (2 weeks)</b>
                <ul>
                  <li><b>Planning</b>
                    <ul>
                      <li><b>Public website structure </b></li>
                      <li><b>Application Vacancy System </b></li>
                      <li><b>Superusers administrator system </b></li>
                      <li><b>Assets reception: documents, images, texts </b></li>
                    </ul>
                  </li>
                  <li><b>Design (3 weeks)</b>
                    <ul>
                      <li><b>UX – UI</b></li>
                    </ul>
                  </li>
                  <li><b>Development</b>
                    <ul>
                      <li><b>FRONTEND (2 weeks)</b></li>
                      <li><b>BACKEND (3 weeks)</b></li>
                      <li><b>Dictionaries implemented in the 3 main systems (3 weeks)</b></li>
                    </ul>
                  </li>
                  <li><b>QA (1 week)</b></li>
                </ul>
              </li>
            </ul>
            <hr/>
            <h3 className="naranja"><span class="lnr lnr-arrow-right"></span> Total 2 months</h3>
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> COST</h4>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Technical and economic proposal for <b>PHASE 1</b></h5>
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
                  <td>Core System</td>
                  <td>(Public Website, Apply System, Admin System).</td>
                  <td className="text-center">$180,000.00</td>
                  <td className="text-center">$27,000.00</td>
                  <td className="text-center">$207,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dictionaries to support 3 different Languages</td>
                  <td>(Implemented in the 2 main systems: Spanish, English, Korean) .</td>
                  <td className="text-center">$35,000.00</td>
                  <td className="text-center">$5,250.00</td>
                  <td className="text-center">$40,250.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>WhatsApp notification system</td>
                  <td></td>
                  <td className="text-center">$10,000.00</td>
                  <td className="text-center">$1,500.00</td>
                  <td className="text-center">$11,500.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$225,000.00</b></td>
                  <td className="text-center">$33,750.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$258,750.00</td>
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
                  <td>Monthly maintenance<br/><b>(per month )</b></td>
                  <td>It includes 36hrs of monthly development for  changes or adjustments attached to the delivered system.<br/><small>(cloud infrastructure and email notification services, WHATSAPP notification service, Monthly payment)</small></td>
                  <td className="text-center">$27,500.00</td>
                  <td className="text-center">$4,125.00</td>
                  <td className="text-center">$31,625.00</td>
                </tr>
              </tbody>
            </Table>
            
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Estimated work plan</h5>
            <p>* 8 Weeks</p>
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
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> <b>IMPORTANT NOTES</b></h5>
            <hr/>
            <ul>
              <li><b>Any development that is external to the delivered system or exceeds 36hrs a month, will have to be quoted separately.<br/>It is not considered a connection to other systems.</b></li>
              <li>No other development is included that is not within what is described above.</li>
              <li>It does not include new developments or improvements to the platform that are outside of the 36 hours of monthly development,  if any new component is required, it will be priced separately.</li>
              <li>Does not include connections to other systems, if any connection is required, it will be priced separately.</li>
              <li>The development time will begin to count from the approval of the quote.</li>
              <li>The time described only covers business days.</li>
              <li>Maintenance is understood as the constant review and necessary adjustments that ensure the correct operation of the platform.</li>
              <li>The platform will live in the INNOCEAN infrastructure until the end of the project; If the client requires maintenance services, the system continues to live in this same infrastructure, otherwise it is implemented in an account created specifically for the system's own use, releasing INNOCEAN from any responsibility.</li>
              <li>The source code is the intellectual property of INNOCEAN, a copy is provided for the exclusive and sole use of the requested project.</li>
              <li>This quote does not include generation or updating of content (VIDEOS, ARTS, TEXTS, VIRTUAL TOURS or other content that requires preparation by third parties).</li>
              <li>Supports the mentioned languages: Spanish , English and Corean.</li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Layout>
    
  )
}

export default KiacareersEs;