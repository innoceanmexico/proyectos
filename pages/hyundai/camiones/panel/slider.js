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
            <Row>
              <Col></Col>
            </Row>
              <ul>
              <li>Para la realización del mismo, estableceremos el siguiente cronograma de trabajo:
                <ul>
                  <li>Contrato.</li>
                  <li>Análisis de sus competencias.</li>
                  <li>Desarrollo del análisis funcional.</li>
                  <li>Entrega de información por cliente: textos, imágenes, vídeos, palabras claves, frases de búsqueda, etc. Esta información sera solicitada por medio de un documento ejemplo.</li>
                </ul>
              </li>
              <li>Inversión del 50%.</li>
              <li>Diseño de propuestas ( 2 a 3 días ).</li>
              <li>Cambios y correcciones del diseño. ( 3 a 5 días ).</li>
              <li>Aceptación del diseño.</li>
              <li>Programación y diseño html/css/Javascript/database,etc.( 1 a 2 semanas ).</li>
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
            <h3><span class="lnr lnr-chevron-right"></span> DESARROLLO DEL BACKEND</h3>
            <hr/>
            <p><b>SERVIDORES</b></p>
            <img
              className="d-block w-100"
              src="/images/hyundai/node.jpg"
              alt="Third slide"
            />
            <hr/>
            
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
