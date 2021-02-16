import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

export default function Coding() {
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
                  <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> INFORMATION</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"><span className="lnr lnr-arrow-right"></span> PLANNING</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"><span className="lnr lnr-arrow-right"></span> DESIGN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth"><span className="lnr lnr-arrow-right"></span> DEVELOPMENT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth"><span className="lnr lnr-arrow-right"></span> TESTING</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth"><span className="lnr lnr-arrow-right"></span> MAINTENANCE</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} className="p-0">
            <Tab.Content>
              <Tab.Pane eventKey="first" style={{ background: "rgba(0,0,0,0.8)"}} className="p-3">
                <div className="contenidoTab mb-5 text-white">
                  <h1><span class="lnr lnr-arrow-right"></span> Stage 1: Gathering Relevant Information</h1>
                  <hr/>
                  <p>The first stage is the most important as it involves understanding the client’s requirements. Identify their needs and help them in providing the perfect solution. Have a clear idea about the target audience. What the business goals are and how the website will be utilized to accomplish those objectives.</p>
                  <hr/>
                  <h3>Here are the considerations:</h3>
                  <hr/>
                  <h4><span className="lnr lnr-chevron-right"></span> Purpose:</h4>
                  <ul>
                    <li>What is the purpose of the website that the developer will be building?</li>
                    <li>What is the actual plan: to provide information solely, sell a product or service?</li>
                  </ul>
                  <h4><span className="lnr lnr-chevron-right"></span> Objectives:</h4>
                  <ul>
                    <li>What is the main goal of building the website?</li>
                    <li>Whether it is informational or promotional?</li>
                  </ul>
                  <h4><span className="lnr lnr-chevron-right"></span> Target Audience:</h4>
                  <ul>
                    <li>Is there is a specific group of people that will help in accomplishing your objectives?</li>
                  </ul>
                  <p>During the website design and development process, it is important to visualize what type of people would you like to visit the website. Consider their age, gender, likes, and dislikes. This will certainly help in designing the best website according to their interest.</p>
                  <h4><span className="lnr lnr-chevron-right"></span> Content:</h4>
                  <ul>
                    <li>What type of content do you post on the site?</li>
                    <li>Is the audience looking for a specific type of information?</li>
                    <li>Are they looking for promotions, deals, or offers to avail?</li>
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second" style={{ background: "rgba(0,0,0,0.8)"}} className="p-3">
                <div className="contenidoTab mb-5 text-white">
                  <h1><span class="lnr lnr-arrow-right"></span> Stage 2: Planning – Sitemap and Wireframe</h1>
                  <hr/>
                  <p>With all the information that has been gathered from stage one, the design and implementation strategies are planned according to the type of website and target audience. A site map is created in this phase.</p>
                  <p>For building a full-fledged website having impeccable features and functionalities, it is important to plan wisely. There has to be a detailed list of all the areas of the website and the sub-topics. This is a guide that describes what content will be there on the site, and there is an easy to understand navigational system.</p>
                  <p>Think of the best user interface that is created for easy navigation. The wireframes give an outline of the pages of the website</p>
                  <p>Take the help of tools for creating the wireframe. All the planning process should have the involvement of the client. So, the client has an idea about the blueprint of the project.</p>
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
