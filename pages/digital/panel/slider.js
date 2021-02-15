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
            <h3><span class="lnr lnr-chevron-right"></span> WORKFLOW</h3>
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