import Layout from '../../components/layout'
import NavbarPrincipal from '../../components/navbarPrincipal'
import Roadmap from '../../components/graficas/roadmap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AgileRituals() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container style={{marginBottom: '90px'}}>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> AGILE RITUALS <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
            <h3>SPRINT PLANNING</h3>
            <p>Meeting where the team defines which user stories they will work on in an upcoming sprint.</p>
            <p><small>Delivery team and Scrum master</small></p>
            <hr />
            <h3>DAILY STANDUPS</h3>
            <p>15 min daily meeting where people stand up near the kanban board and share what they did yesterday, what they are doing today and impediments (if any).</p>
            <p><small>Delivery team and Scrum master</small></p>
            <hr />
            <h3>SPRINT REVIEW (DEMO/SHOWCASE)</h3>
            <p>Meeting where the team presents what they have delivered over a sprint to product owner.</p>
            <p><small>Product Owner, Delivery Team and Scrum Master</small></p>
            <hr />
            <h3>RETROSPECTIVES</h3>
            <p>Meetings done after sprints to review, revise and adjust (Similar to a lessons learned, but in real time, not jus at the end of the project).</p>
            <p><small>Delivery Team and Scrum Master</small></p>
            <hr />
          </Col>
        </Row>
      </Container>
    </Layout>

  )
}

export default AgileRituals;