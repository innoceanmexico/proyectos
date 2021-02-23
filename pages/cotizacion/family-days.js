import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function FamilyDays() {
  return (
    <Layout>
      <Container className="cotizacion">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3 mb-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> KIA FAMILY DAYS <span style={{ color: '#f0582a' }}>]</span>
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
            <Link href="/cotizacion/hyundai-seminuevos/"><a className="btn btn-default m-0 mt-3 w-100">ESPAÑOL</a></Link>
          </Col>
          <Col xs={12} md={10}>
            <h5><b><span class="lnr lnr-plus-circle"></span> INTRODUCCIÓN</b></h5>
            <hr/>
            <p>Desarrollo de plataforma para la captura de usuarios y materiales para <b>concurso KIA Family-Days</b>.</p>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> FLUJO DE LA PLATAFORMA</b></h5>
            <hr/>
            <div align="center mt-3 mb-3">
              <img src="/images/kia/family-days.svg" className="img-fluid" alt="" alt="" />
            </div>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> INSUMOS NECESARIOS PARA EL DESARROLLO</b></h5>
            <hr/>
            <ul>
              <li>ARTES para el landing y secciones interiores (Textos, imágenes y layout general)</li>
              <li>Conección con la API del CRM</li>
              <li>Códigos generados por distribuidores / Usuarios que ya no necesitan registro</li>
            </ul>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> PLAN DE TRABAJO</b></h5>
            <hr/>
            <p>* 1 semana</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Actividades</th>
                  <th scope="col" colSpan="4">Marzo (5 DÍAS)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Diseño Frontend</th>
                  <td style={{background:'#F05829',color:'#fff'}}>D1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>D2</td>
                  <td>D3</td>
                  <td>D4</td>
                  <td>D5</td>
                </tr>
                <tr>
                  <th scope="row">Diseño Backend</th>
                  <td style={{background:'#F05829',color:'#fff'}}>D1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>D2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>D3</td>
                  <td>D4</td>
                  <td>D5</td>
                </tr>
                <tr>
                  <th scope="row">Integración Base de datos / CRM</th>
                  <td>D1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>D2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>D3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>D4</td>
                  <td>D5</td>
                </tr>
                <tr>
                  <th scope="row">PRUEBAS Y ENTREGA</th>
                  <td>D1</td>
                  <td>D2</td>
                  <td>D3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>D4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>D5</td>
                </tr>
              </tbody>
            </table>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> RECURSOS HUMANOS</b></h5>
            <hr/>
            <p>Necesitaremos un equipo de desarrollo que sea muy sólido en desarrollo, diseño de frontend, arquitecto de base de datos y conexión de servicio.</p>
            <h6><b><span class="lnr lnr-arrow-right"></span> Equipo:</b></h6>
            <ul>
              <li><b>1 Desarrollador Frontend</b>
                <ul>
                  <li><b>Características:</b>
                    <ul>
                      <li>HTML simple, limpio y semántico.</li>
                      <li>CSS receptivo, flexible, adaptable, impulsado por componentes y orientado a objetos</li>
                      <li>Código JavaScript modular, conciso y bien documentado. Alguien que sepa cuándo está bien (y cuándo está mal) usar una biblioteca</li>
                      <li>Conocimiento de la línea de comandos y la capacidad de usar un sistema de control de versiones como Git</li>
                      <li>Utiliza un script de compilación para optimizar sus imágenes y CSS, y que concatena y minimiza su JavaScript</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <hr/>
              <li><b>1 Desarrollador Backend</b>
                <ul>
                  <li><b>Características:</b>
                    <ul>
                      <li>Creación, integración y gestión de bases de datos. Algunos ejemplos son MySQL, PostgreSQL y MongoDB</li>
                      <li>Creación de software del lado del servidor utilizando marcos de backend como NodeJS</li>
                      <li>Haciendo tecnologías de servidor web de integración de computación en la nube</li>
                      <li>Implementa lenguajes de programación del lado del servidor, como JavaScript, PHP y Python</li>
                      <li>Desarrollo, implementación y mantenimiento de sistemas de gestión de contenido</li>
                      <li>Realización de la configuración de seguridad e integración de API</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <hr/>
          </Col>
        </Row>

      </Container>
    </Layout>
    
  )
}

export default FamilyDays;