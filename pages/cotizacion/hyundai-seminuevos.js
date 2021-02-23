import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function HyundaiSeminuevos() {
  return (
    <Layout>
      <Container className="cotizacion">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3 mb-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> HYUNDAI DISTRIBUIDORES <span style={{ color: '#f0582a' }}>]</span>
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
            <Link href="/cotizacion/hyundai-seminuevos/"><a className="btn btn-default m-0 mt-3 w-100 mb-0">ENGLISH</a></Link>
            <Link href="/cotizacion/hyundai-seminuevos-es/"><a className="btn btn-default m-0 mt-1 w-100">ESPAÑOL</a></Link>
          </Col>
          <Col xs={12} md={10}>
            <h3><b><span class="lnr lnr-chevron-right"></span> SITIO DISTRIBUIDORES</b></h3>
            <hr/>
            <h3><span class="lnr lnr-chevron-right"></span> OBJETIVO</h3>
            <hr/>
            <p>Hyundai publicará un programa de seminuevos con venta para cada dealer.</p>
            <h5 className="pt-3"><b><span class="lnr lnr-plus-circle"></span> SITIO PÚBLICO</b></h5>
            <hr/>
            <p>Landing o sección de seminuevos certificados con las siguientes características:</p>
            <ul>
              <li><b>Condiciones de programa</b> - Hyundai Certifica los seminuevos y los vende en sus dealers.
                <ul>
                  <li>Slideshow y abajo un bloque explicando infograficamente en que consiste el programa</li>
                </ul>
              </li>
              <li><b>Inventario</b> disponible en toda la red <b>SÓLO HYUNDAI</b></li>
              <li><b>Detalle del modelo</b> contará con:
                <ul>
                  <li>Ficha técnica</li>
                  <li>Hoja de certificación seminuevo</li>
                  <li>Galería de imágenes / Interiores y exteriores</li>
                  <li>Precio</li>
                  <li>Formulario para agendar prueba de manejo
                    <ul>
                      <li>La información le llegará al distribuidor correspondiente</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> SITIO DISTRIBUIDORES</b></h5>
            <hr/>
            <p>Sitio homologado de distribuidores (Sitio Público) en la que el distribuidor solo podrá consultar los seminuevos del distribuidor registrado.</p>
            <h5><span class="lnr lnr-plus-circle"></span> PANEL DE CONTROL</h5>
            <hr/>
            <p><span class="lnr lnr-chevron-right"></span> <b>ADMINISTRADORES</b>:</p>
            <ul>
              <li>Cada distribuidor sube su contenido a un panel de control personalizado
                <ul>
                  <li>Filtro verificador de que los vehículos pertenezcan unicamente a <b>HYUNDAI</b></li>
                  <li>Gestión de contenidos generales</li>
                  <li>Gestión de condiciones del programa</li>
                </ul>
              </li>
            </ul>
            
            <hr/>
            <p><span class="lnr lnr-chevron-right"></span> <b>DISTRIBUIDORES</b>:</p>
            <ul>
              <li>Cada distribuidor sube su contenido a un panel de control personalizado
                <ul>
                  <li>Los vehículos agregados aparecerán en el sitio público de seminuevos</li>
                  <li>Cada distribuidor gestionará el inventario/existencias</li>
                  <li>Cada distribuidor gestionará las fichas de cada vehículo
                    <ul>
                      <li>Fotografías</li>
                      <li>Especificaciones técnicas</li>
                      <li>Botón para descargar certificación</li>
                      <li>Precio</li>
                      <li>Formulario para generar cita / prueba de manejo</li>
                    </ul>
                  </li>
                  <li>Cada distribuidor gestionará las imágenes de cada vehículo</li>
                </ul>
              </li>
            </ul>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> ESTRUCTURA DE LA PLATAFORMA</b></h5>
            <hr/>
            <ul>
              <li>FRONTEND: HTML, CSS3, JAVASCRIPT
                <ul>
                  <li><b>ReactJS</b></li>
                </ul>
              </li>
              <li>BACKEND:
                <ul>
                  <li><b>NodeJS</b></li>
                  <li><b>Express</b></li>
                  <li><b>SQL/Mongo</b></li>
                </ul>
              </li>
            </ul>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> PLAN DE TRABAJO</b></h5>
            <hr/>
            <p>* 4 semanas</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Actividades</th>
                  <th scope="col" colSpan="4">Marzo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Diseño Frontend</th>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Backend / Infrastructura desarrollo e implementación</th>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Integración de CRM y Base de datos</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Pruebas e implementación final</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                </tr>
              </tbody>
            </table>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> <b>NOTAS IMPORTANTES</b></h5>
            <hr/>
            <ul>
              <li><b>Cualquier desarrollo que sea externo al sistema entregado o que supere las 36 horas al mes, deberá cotizarse por separado</b>.</li>
              <li>No se incluye ningún otro desarrollo que no esté dentro de lo descrito anteriormente.</li>
              <li>.</li>
              <li>No incluye nuevos desarrollos o mejoras a la plataforma que estén fuera de las 36 horas de desarrollo mensual, si se requiere algún componente nuevo, se cotizará por separado.</li>
              <li>El tiempo de desarrollo comenzará a contar a partir de la aprobación del presupuesto.</li>
              <li>The time described only covers business days.</li>
              <li>El tiempo descrito solo cubre los días hábiles.</li>
              <li>La plataforma vivirá en la infraestructura de INNOCEAN hasta el final del proyecto; Si el cliente requiere servicios de mantenimiento, el sistema sigue viviendo en esta misma infraestructura, en caso contrario se implementa en una cuenta creada específicamente para el uso del sistema, liberando a INNOCEAN de cualquier responsabilidad.</li>
              <li>El código fuente es propiedad intelectual de INNOCEAN, se proporciona una copia para uso exclusivo y exclusivo del proyecto solicitado.</li>
              <li>Esta cotización no incluye generación o actualización de contenido (VIDEOS, ARTES, TEXTOS, TOURS VIRTUALES u otro contenido que requiera preparación por parte de terceros).</li>
              <li>Soporta los idiomas mencionados: español, inglés.</li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Layout>
    
  )
}

export default HyundaiSeminuevos;