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
            <ul style={{listStyle: 'none', fontWeight: 'bold', fontSize: '1.3rem'}}>
              <li>a) Server-side scripting</li>
              <li>b) Client-side scripting</li>
              <li>c) Database technology</li>
            </ul>
            <hr/>
            {/* 
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
            */}
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
            <p>The first process on any web project is to <b>understand and analyze the requirements</b>. At INNOCEAN MÉXICO, we make sure we <b>understand the project requirements in detail before we begin</b>. One of the main reasons for this is because most of our projects are fixed price projects which protects both parties.<br/><br/>The requirements collection process is done at the customer facility in person or through online conferencing such as WebEx or GoToMeeting.</p>
            <hr/>
            <p><b>Once the requirements are all understood and documented, our technical team will work on a Work Breakdown Structure spreadsheet for the project</b> which has all the details like tasks, hours per task, total cost, assumptions, technology stack and deadlines for the project.</p>
            <hr/>
            
          </Carousel.Caption>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
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
