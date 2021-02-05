import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function Kiacareers() {
  return (
    <Layout>
      <Container className="cotizacion">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3 mb-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> KIA MOTORS MÉXICO CAREERS <span style={{ color: '#f0582a' }}>]</span>
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
            <Link href="/cotizacion/livechat/"><a className="btn btn-default m-0 mt-3 w-100 mb-0">ENGLISH</a></Link>
            <Link href="/cotizacion/livechat-es/"><a className="btn btn-default m-0 mt-1 w-100">ESPAÑOL</a></Link>
          </Col>
          <Col xs={12} md={10}>
            <h3><span class="lnr lnr-chevron-right"></span> Technical and economic proposal</h3>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Description</h5>
            <hr/>
            <p>Develop a digital platform dedicated for the constant communication with the KIA’s end users, with the main goal to help position the company as the best place to work in Mexico City and support the hiring process.</p>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Platform</h5>
            <hr/>
            <p>The platform will have 3 different areas: Public Website, Application Vacancy System and Super Users Administrator System.</p>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Public Website:</h5>
            <hr/>
            <ul>
              <li><b>Develop a dynamic public website, to keep the end users updated with information about company and their culture, and the option to display the information in different languages (Spanish, English, Korean)</b>
              <hr/>
                <ul>
                  <li>This website could be embedded into the kia.com main website by an IFRAME or it could live in an external domain (recommended)</li>
                  <li>Deploy information like:</li>
                  <ul>
                    <li>Organizational culture</li>
                    <li>News</li>
                    <li>FAQ´S</li>
                    <li>Videos
                      <ul>
                        <li>Virtual Tours</li>
                      </ul>
                    </li>
                    <li>Testimonials</li>
                    <li>Vacancies</li>
                  </ul>
                </ul>
              </li>
              <hr/>
              <li><b>Application Vacancy System</b>
              <hr/>
                <ul>
                  <li>The users that want to apply to some vacancy displayed on the public website, could create a new profile into the Application Vacancy System and apply immediately and the option to apply in different languages (Spanish, English, Korean)
                    <ul>
                      <li>Register form</li>
                      <li>User / Password</li>
                      <li>Personal user data form</li>
                      <li>Upload files system
                        <ul>
                          <li>Photography</li>
                          <li>Documentation</li>
                        </ul>
                      </li>
                      <li>General dashboard to display the current vacancy user applied status</li>
                      <li>Timeline to show the different phases to fulfill
                        <ul>
                          <li>Necessary requirements to fulfill each phase</li>
                        </ul>
                      </li>
                      <li>Test to approve per user depending on the vacancy
                        <ul>
                          <li>Certificate generator system for each test accomplished successfully</li>
                        </ul>
                      </li>
                      <li>Administrator notification through the platform and email</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <hr/>
              <li><b>Admin Superusers</b>
              <hr/>
                <ul>
                  <li>The superusers/admins will have access to manage each area inside the platform</li>
                  <li>•	The system will have the option to display the information in 3 different language (English, Spanish, Korean)
                    <ul>
                      <li>The super users could create different types of users for different proposes</li>
                      <li><b>Upload and edit info in different languages (Spanish, English, Korean)</b>
                        <ul>
                          <li>Content Manager Systems form the public website
                            <ul>
                              <li>Upload and video management</li>
                              <li>News Management</li>
                              <li>Upload and Image management</li>
                              <li>FAQ’S Management</li>
                              <li>Testimonials Management</li>
                            </ul>
                          </li>
                          <li>Users Manager
                            <ul>
                              <li>Give access to different areas</li>
                              <li>Create, update & delete users</li>
                              <li>Create, update & delete admins</li>
                            </ul>
                          </li>
                          <li>Vacancies
                            <ul>
                              <li>Create, update & delete vacancy info</li>
                              <li>Profile vacancy editor</li>
                              <li>Dynamic phases creator system
                                <ul>
                                  <li>Assignment of managers for each phase</li>
                                  <li>Define the necessary requirements per phase</li>
                                  <li>Test creator system for each Vacancy</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>Application management system
                            <ul>
                              <li>Reception</li>
                              <li>Update</li>
                              <li>Approvement
                                <ul>
                                  <li>For the vacancy application</li>
                                  <li>For vacancy phase</li>
                                </ul>
                              </li>
                              <li>Rejected applications</li>
                            </ul>
                          </li>
                          <li>Notifications via platform or email</li>
                          <li>Notifications via WHATSAPP</li>
                          <li>Support area
                            <ul>
                              <li>Section where the admins can help the end users to solve their doubts through tickets system</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <hr/>
              <h5 className="naranja"><span class="lnr lnr-plus-circle"></span> Technology</h5>
            <hr/>
            <h6><span class="lnr lnr-arrow-right"></span> Each area will work under an environment developed in AWS (AMAZON WEB SERVICES):</h6>
            <ul>
              <li>Administrator y users security logins in AWS COGNITO</li>
              <li>Database management in AWS DYNAMODB</li>
              <li>Access to services through AWS APIGATEWAY</li>
              <li>Developed Microservices in AWS LAMBDAS</li>
              <li><b>Security and user data encryption through SSL</b></li>
            </ul>
            <h6><span class="lnr lnr-arrow-right"></span> Platform structure:</h6>
            <ul>
              <li>FRONTEND: HTML, CSS3, JAVASCRIPT
                <ul>
                  <li>FRAMEWORK REACT</li>
                </ul>
              </li>
              <li>BACKEND: <b>NODEJS</b></li>
              <li>3 Dictionaries to develop
                <ul>
                  <li>Main System Dictionary
                    <ul>
                      <li>Core System interfaces displayed in 3 different languages</li>
                    </ul>
                  </li>
                  <li>Apply System Dictionary
                    <ul>
                      <li>Core System interfaces displayed in 3 different languages</li>
                      <li>Dynamic System dictionary, for multiple components created in the main system editor such as Phases, tests, vacancies profiles </li>
                    </ul>
                  </li>
                  <li>Public Website Dictionary
                    <ul>
                      <li>Dynamic System dictionary, for multiple information uploaded in the main system editor asu as News, Virtual Tours, Vacancies</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h6><b><span class="lnr lnr-arrow-right"></span> Constant DATABASE BACKUP for the last 30 days:</b></h6>
            <hr/>
            <h3 className="naranja"><span class="lnr lnr-arrow-right"></span> Phases</h3>
            <hr/>
            <ul>
              <li><b>KICKOFF (2 weeks)</b>
                <ul>
                  <li><b>Planning</b>
                    <ul>
                      <li><b>Public website structure </b></li>
                      <li><b>Application Vacancy System </b></li>
                      <li><b>Superusers administrator system </b></li>
                      <li><b>Assets reception: documents, images, texts </b></li>
                    </ul>
                  </li>
                  <li><b>Design (3 weeks)</b>
                    <ul>
                      <li><b>UX – UI</b></li>
                    </ul>
                  </li>
                  <li><b>Development</b>
                    <ul>
                      <li><b>FRONTEND (4 weeks)</b></li>
                      <li><b>BACKEND (5 weeks)</b></li>
                      <li><b>Dictionaries implemented in the 3 main systems (3 weeks)</b></li>
                    </ul>
                  </li>
                  <li><b>QA (1 week)</b></li>
                </ul>
              </li>
            </ul>
            <hr/>
            <h3 className="naranja"><span class="lnr lnr-arrow-right"></span> Total 4 months</h3>
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> PHASE 1 - CHAT TEXT</h4>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Technical and economic proposal for <b>PHASE 1 - CHAT TEXT</b></h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPT</th>
                  <th>DESCRIPTION</th>
                  <th className="text-center">Original Cost MXN</th>
                  <th className="text-center">IWN Profit MXN</th>
                  <th style={{background: '#F05829', color: '#fff'}} className="text-center">Cost including IWN Gain MXN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Live chat</td>
                  <td>Online service software for customers and visitors of the different KMM web platforms.</td>
                  <td className="text-center">$310,000.00</td>
                  <td className="text-center">$37,200.00</td>
                  <td className="text-center">$347,200.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Administration module</td>
                  <td>Module for the registration, cancellation and changes of users or agents to interact / operate in the livechat.</td>
                  <td className="text-center">$150,000.00</td>
                  <td className="text-center">$18,000.00</td>
                  <td className="text-center">$168,000.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Integrations</td>
                  <td>Integrations with the following platforms:
                    <ul>
                      <li>kia.com/mx</li>
                      <li>apartatukia.com</li>
                      <li>Dealer portal</li>
                      <li>Sistemas CRM</li>
                    </ul>
                  </td>
                  <td className="text-center">$90,000.00</td>
                  <td className="text-center">$10,800.00</td>
                  <td className="text-center">$100,800.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dashboard</td>
                  <td>Analytical dashboard for measurement and monitoring of the main operational indicators of the platform.</td>
                  <td className="text-center">$100,000.00</td>
                  <td className="text-center">$12,000.00</td>
                  <td className="text-center">$112,000.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$650,000.00</b></td>
                  <td className="text-center">$78,000.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$728,000.00</td>
                </tr>
              </tbody>
            </Table>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Monthly maintenance</h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPT</th>
                  <th>DESCRIPTION</th>
                  <th className="text-center">Original Cost MXN</th>
                  <th className="text-center">IWN Profit MXN</th>
                  <th style={{background: '#F05829', color: '#fff'}} className="text-center">Cost including IWN Gain MXN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Infrastructure for hosting the platform</td>
                  <td>Infrastructure required and optimized to assemble the technological components of the campaign. Servers, Databases, Firewalls and security certificates are included to host the platform under a Cloud scheme. (Estimated for unlimited concurrent users).</td>
                  <td className="text-center">$20,000.00</td>
                  <td className="text-center">$2,400.00</td>
                  <td className="text-center">$22,400.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Operation and support</td>
                  <td>Support and operation activities to keep the platform in optimal operations.</td>
                  <td className="text-center">$7,500.00</td>
                  <td className="text-center">$900.00</td>
                  <td className="text-center">$8,400.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$27,500.00</b></td>
                  <td className="text-center">$3,300.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$30,800.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL COST FOR 1 YEAR</b></td>
                  <td className="text-center"><b>$330,000.00</b></td>
                  <td className="text-center">$39,600.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$369,600.00</td>
                </tr>
              </tbody>
            </Table>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center" colSpan="2">Total cost of the project</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total cost of the project (development and 1 year maintenance with no IWWM gain) </td>
                  <td className="text-center">$980,000.00</td>
                  <td className="text-center" style={{background: '#111', color: '#fff', fontWeight: 'bold'}}>$1,097,600.00</td>
                </tr>
                <tr>
                  <td>Total IWWM gain (development and 1 year maintenance)</td>
                  <td className="text-center"></td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff', fontWeight: 'bold'}}>$117,600.00</td>
                </tr>
                <tr>
                  <td>Total IWWM gain (percentage, total project) </td>
                  <td className="text-center"></td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff', fontWeight: 'bold'}}>12%</td>
                </tr>
              </tbody>
            </Table>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Estimated work plan</h5>
            <p>* 6 Weeks</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Activities</th>
                  <th scope="col" colSpan="4">February</th>
                  <th scope="col" colSpan="4">March</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Frontend Design</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Backend / Infrastructure development and implementation</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Creation and integration of Web Services and API's</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">CMS development</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Integration with CRM</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Final tests and adjustments</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                  <td>S1</td>
                  <td>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                </tr>
              </tbody>
            </table>
            <hr/>
            <hr/>
            <h4><span class="lnr lnr-arrow-right"></span> PHASE 2 - VIDEO CHAT</h4>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Technical and economic proposal for <b>PHASE 2 - VIDEO CHAT</b></h5>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>CONCEPT</th>
                  <th>DESCRIPTION</th>
                  <th className="text-center">Original Cost MXN</th>
                  <th className="text-center">IWN Profit MXN</th>
                  <th style={{background: '#F05829', color: '#fff'}} className="text-center">Cost including IWN Gain MXN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Live chat video</td>
                  <td>Implementation of the ability to transmit live-streaming video.</td>
                  <td>$250,000.00</td>
                  <td className="text-center">$30,000.00</td>
                  <td className="text-center">$280,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Integraciones</td>
                  <td>Integrations with the following platforms:
                    <ul>
                      <li>kia.com/mx</li>
                      <li>apartatukia.com</li>
                      <li>Dealer portal</li>
                      <li>Sistemas CRM</li>
                    </ul>
                  </td>
                  <td>$90,000.00</td>
                  <td className="text-center">$10,800.00</td>
                  <td className="text-center">$100,800.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dashboard</td>
                  <td>Analytical dashboard for measurement and monitoring of the main operational indicators of the platform.</td>
                  <td>$100,000.00</td>
                  <td className="text-center">$1,200.00</td>
                  <td className="text-center">$101,200.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$440,000.00</b></td>
                  <td className="text-center"><b>$42,000.00</b></td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}><b>$482,000.00</b></td>
                </tr>
              </tbody>
            </Table>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> Estimated work plan</h5>
            <p>* 4 weeks approximately</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Activities</th>
                  <th scope="col" colSpan="4">April</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Frontend Design</th>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">Backend / Infrastructure development and implementation</th>
                  <td>S1</td>
                  <td>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                </tr>
              </tbody>
            </table>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> <b>IMPORTANT NOTES</b></h5>
            <hr/>
            <ul>
              <li>The development and release time of the components in this proposal from 4 months from the formal acceptance thereof.</li>
              <li>In case of acceptance of this proposal, it will be necessary to jointly define, or confirm the proposed business rules under which the platforms will operate (eg, for how long will it be reserved before making it available again, a car without receiving the payment of section ; or, how many email notifications the user should receive during the process and section payment).</li>
              <li>Economic proposal valid for 30 calendar days from the date hereof. Prices without VAT. Travel expenses are not included if required.</li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Layout>
    
  )
}

export default Kiacareers;