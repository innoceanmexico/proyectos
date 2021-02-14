import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Slider() {
  return (
    <Carousel interval="10000000">
      <Carousel.Item>
        <Row>
          <Col>
          <Carousel.Caption>
            <h3><span class="lnr lnr-chevron-right"></span> DESARROLLO</h3>
            <hr/>
            <p>Diseñar, desarrollar, desplegar, dar soporte, mantenimiento y hospedaje a la plataforma web <b>HYUNDAI CAMIONES Y BUSES</b>. La plataforma tendrá como objetivo principal la interacción de los visitantes/clientes de la plataforma con un pool de agentes del corporativo o de la red de dealers mediante mensajes de texto y video conferencias en vivo.</p>
            <p><b>INNOCEAN DIGITAL DEVELOPMENT MÉXICO</b> nace con el objetivo de crear una empresa que pudiera brindar servicios de calidad a un precio razonable, con soporte real y personalizado en nuestras oficinas por parte de nuestro equipo humano, compuesto por profesionales altamente capacitados (Ingenieros en informática y redes, programadores, diseñadores Graficos y técnicos especializados).</p>
            <h3><span class="lnr lnr-chevron-right"></span> Las etapas de desarrollo incluyen:</h3>
            <ul className="list-style-none">
              <li>a) Desarrollo del Backend</li>
              <li>b) Desarrollo del Frontend</li>
              <li>c) Desarrollo y Arquitectura de la base de datos</li>
            </ul>
            <hr/>
            <ul>
              <li>Para la realización del mismo, estableceremos el siguiente cronograma de trabajo: Contrato.
                <ul>
                  <li>Inversión del 50%.</li>
                  <li>Análisis de sus competencias.</li>
                  <li>Desarrollo del análisis funcional.</li>
                  <li>Entrega de información por cliente: textos, imágenes, vídeos, palabras claves, frases de búsqueda, etc. Esta información sera solicitada por medio de un documento ejemplo.</li>
                </ul>
              </li>
              <li>Inversión del 50%.</li>
              <li>Diseño de propuestas ( 2 a 3 días ).</li>
              <li>Cambios y correcciones del diseño. ( 3 a 5 días ).</li>
              <li>Aceptación del diseño.</li>
              <li>Programación y diseño html/css/Javascript,etc.( 1 a 2 semanas ).</li>
              <li>Edición de contenidos Web: Desarrollo on-line durante el proceso, Test de usabilidad web, optimización de buscadores ( opcional ).</li>
              <li>Revisión final y entrega.</li>
              <li>Capatización y orientación para la administración de su sitio ( este punto se aplica solo cuando el sitio web es autoadministrable ). ( 4 a 6 horas ).</li>
              <li>Pago final.</li>
            </ul>
            {/* 
            <img
              className="d-block w-100"
              src="/images/digital/web-flow.jpg"
              alt="Third slide"
            />
            */}
          </Carousel.Caption>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col>
          <Carousel.Caption>
            <h3><span class="lnr lnr-chevron-right"></span> REQUIREMENT ANALISYS</h3>
            <hr/>
            <p>The web development process can actually vary in terms of manpower. For example for big businesses, there are hundreds of people working together as a team. On the other hand, it is very much possible that a single person can make the whole website on his own too. Certainly, the outcome of both of these categories will be completely different. In the case of the first approach, <b>Agile Methodologies</b> are very helpful. The content management system is also in use during the process to make content changes easily.</p>
            <h3><span class="lnr lnr-chevron-right"></span> The web development chain of command includes:</h3>
            <ul className="list-style-none">
              <li>a) Server-side scripting</li>
              <li>b) Client-side scripting</li>
              <li>c) Database technology</li>
            </ul>
            <hr/>
            <div className="d-flex badges">
              <div><p>REQUIREMENT ANALISYS</p><span class="lnr lnr-arrow-right"></span></div>
              <div><p>REQUIREMENTS DEFINATION</p><span class="lnr lnr-arrow-right"></span></div>
              <div><p>PLANNING & APPROVAL</p><span class="lnr lnr-arrow-right"></span></div>
              <div><p>DATABASE DESIGN AND IMPLEMENTATION</p><span class="lnr lnr-arrow-right"></span></div>
              <div><p>BACKEND INTEGRATION</p><span class="lnr lnr-arrow-right"></span></div>
            </div>
            <div className="d-flex badges">
              <div><p>SECURITY INTEGRATION</p><span class="lnr lnr-arrow-right"></span></div>
              <div><p>DEVELOPMENT AND IMPLEMENTATION</p><span class="lnr lnr-arrow-right"></span></div>
              <div><p>QUALITY TESTING</p><span class="lnr lnr-arrow-right"></span></div>
              <div><p>APPLICATION DEPLOYMENT</p><span class="lnr lnr-arrow-right"></span></div>
              <div><p>SUPPORT AND GUIDANCE</p><span class="lnr lnr-arrow-right"></span></div>
            </div>
          </Carousel.Caption>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />
          </Col>
          <Col>
          <Carousel.Caption>
            <h3>HOLA</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  )
}
