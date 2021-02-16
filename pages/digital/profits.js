import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

export default function Profits() {
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
                  <Nav.Link eventKey="first"><span className="lnr lnr-arrow-right"></span> DMP</Nav.Link>
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
                  <h1><span class="lnr lnr-arrow-right"></span> DATA MANAGEMENT PLATFORM</h1>
                  <hr/>
                  <p className="text-white">Tracking data helps companies to better understand consumer behavior and to customize their services. Moreover, it allows them to better target potential customers. Similar words and slides are usually used to convince advertisers to join the pack, invest in their technology stack and buy a Data Management Platform (DMP).</p>
                  <hr/>
                  <h2 className="text-white">DMP data integration</h2>
                  <hr/>
                  <p className="text-white">User behavior on websites and platforms is mostly captured via tracking pixels (cookies). A “pixel” or “TAG” is a small piece of software that is loaded in the background of a website to collect information (undetected), about users and their behavior on the website. Providers whose pixels/TAGs are implemented on multiple websites can track user behavior across the diﬀerent websites to create detailed user proﬁles.</p>
                  <p className="text-white">These proﬁle segments are very useful from the advertiser’s perspective because they enable them to address members of their target group in a favorable environment. The key challenge with current cookie-based tracking is at least twofold. First, walled gardens such as facebook, youtube, amazon do not allow marketers to track their advertising.</p>
                  <p className="text-white">Most use cases focus on three areas:</p>
                  <hr/>
                  <Row>
                    <Col>
                      <h3 className="text-center bkgnaranja p-3">Targeting Costs</h3>
                    </Col>
                    <Col>
                      <h3 className="text-center bkgnaranja p-3">Frequency Management</h3>
                    </Col>
                    <Col>
                      <h3 className="text-center bkgnaranja p-3">Personalization</h3>
                    </Col>
                  </Row>
                  <hr/>
                  <h2 className="text-white">On intent data</h2>
                  <hr/>
                  <Row>
                    <Col>
                      <div align="center">
                        <img src="/images/hyundai/intentData.png" className="img-fluid" alt="innocean méxico" title="innocean méxico" style={{width: '450px'}} />
                      </div>
                    </Col>
                  </Row>
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
