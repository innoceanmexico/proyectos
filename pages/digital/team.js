import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

export default function Team() {
  return (
    <Layout>
      <div>
        <Container fluid={true} className="p-0 m-0 development">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="p-0 m-0" style={{ height: '100vh', width: '100%' }}>
            <Col className="p-0 m-0" xs={2} sm={2} md={2} lg={2} className="p-0" style={{ background: "#111" }}>
              <Link href="/digital">
                <a className="regreso">
                  <span class="lnr lnr-chevron-left"></span>
                </a>
              </Link>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> TEAM</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} className="p-0">
            <Tab.Content>
              <Tab.Pane eventKey="first" style={
                { 
                  background: "rgb(0,47,72)",
                  background: "linear-gradient(157deg, rgba(0,47,72,1) 14%, rgba(16,22,31,1) 86%)"
                }
              } className="p-3">
                <div className="contenidoTab mb-5">
                  <h1><span class="lnr lnr-arrow-right"></span> TEAM</h1>
                  <hr/>
                  <h2 className="text-white">The goal is not just to manage a project through to completion, but also to ensure that the team is aligned with what needs to be done, who should do it, and when.</h2>
                  <h2 className="text-white">CONTEXT</h2>
                  <p className="text-white">It outlines the strategic vision, goals, and objectives and ideally includes a high-level mission statement. This will help align the team in focus and keep these goals in mind during the solution. It will also help define additional work and possible project improvements, as the team has the context in mind.</p>
                  <h2 className="text-white">PROJECT PARAMETERS</h2>
                  <p className="text-white">The goal is to allow everyone involved to work together to deliver your project, which is why describing the plan in the project inception document to the team is just as important as outlining the scope.</p>
                  <h2 className="text-white">PROJECT STRUCTURE</h2>
                  <p className="text-white">To make sure the team is clear about how the deliverables are created, it is essential to break the work down into smaller pieces and create a project breakdown that includes assignments. It shows how the deliverables come together and who will be working on what with whom.</p>
                  <h2 className="text-white">DEFINE WHO IS WHO</h2>
                  <p className="text-white">An important aspect of the project inception document is the overall structure of the project team, both internally and externally. Who is working on the team? Who can approve things before they reach a customer. Who on the client side should be consulted before signing? Establishing this will help avoid misunderstandings and give you an idea of ​​how complex the signatures will be.</p>
                </div>
              </Tab.Pane>
            </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Container>
      </div>
    </Layout>
  )
}
