import React, { useState } from 'react';
import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import Cube from '../../components/3d/cube'

function Vr() {
  return (
    <Layout>
      <Container fluid={true} className="cotizacion ar">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3 mb-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> <b>KIA STINGER AUGMENTED REALITY</b> <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
          </Col>
        </Row>
        <Row style={{ marginBottom: '90px', background: 'rgba(255,255,255,0.95)'}}>
          <Col className="mt-2">
            <div align="center">
              <img src="/images/logo.png" alt="INNOCEAN MÉXICO" alt="INNOCEAN MÉXICO" />
            </div>
            <Link href="/cotizacion/vr/"><a className="btn btn-default m-0 mt-3 w-100 mb-0">ENGLISH</a></Link>
            <Link href="/cotizacion/vr-es/"><a className="btn btn-default m-0 mt-1 w-100">ESPAÑOL</a></Link>
            <hr/>
            <Cube />
          </Col>
          <Col xs={12} md={9}>
            <h3><span class="lnr lnr-chevron-right"></span> Technical and economic proposal</h3>
            <h4 className="pt-3 font-weight-bold"><span class="lnr lnr-plus-circle"></span> Description</h4>
            <hr/>
            <p>In this Augmented Reality development, the user will be able to experiment the KIA Stinger inside their environment, with the goal to live the sensation of owning their own KIA.<br/><br/><b>The client will be able to see the interiors, exteriors and the specifics (customize settings) that make them different (USP’s)</b>.<br/><br/>They will be able to change the color of the vehicle and to interact with the 3D models. They will integrate other materials such as videos and photographs to give a more integral experience.</p>
            <hr/>
            <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span> Target Audience</h4>
            <hr/>
            <h6><b>55% men</b> - <b>45% women</b>. They can and can’t be married and with kids.</h6>
            <ul>
              <li>Working class</li>
              <li>25–40 years</li>
              <li>NSE A, B, C+</li>
              <li>They are worried about personal progress</li>
              <li>They follow technology and design novelties and tendencies</li>
            </ul>
            <hr/>
            <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span> Platform Flow
</h4>
            <hr/>
            <h5 className="font-weight-bold">App Registration</h5>
            <p>In order for this data to go to the CRM system, it will recquire to have a Siebel connection VIA a KIA Web Service, which is a SOAP with a development environment as well as a productive environment, it connects with certificates that are generated by the IT Area from KIA; these certificates are made by a public IP (the IP will be from the place where the provider’s service is located)</p>
            <hr/>
            <h5 className="font-weight-bold">Car interaction</h5>
            <p>The user will be able to:</p>
            <ul>
              <li>ROTATE</li>
              <li>SCALE</li>
              <li>OPEN</li>
              <li>CLOSE</li>
              <li>SEE INTERIORS</li>
            </ul>
            <p className="font-weight-bold">Besides the interaction with the different cars, the App must contain a menu that will redirect to KIA’s different oficial platforms.</p>
            <h5 className="font-weight-bold">KIA.COM to the car’s respective official</h5>
            <ul>
              <li>Showroom</li>
              <li>Request a Test Drive</li>
              <li>Finance Calculator</li>
              <li>Reserve a KIA</li>
            </ul>
            <hr/>
            <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span> Development
</h4>
            <hr/>
            <p>In order to make this implementation as easisest of use and the least time consuming , there are two implementations in the AR scope:</p>
            <Row>
              <Col>
                <h3><b>WEB</b> AR</h3>
                <hr/>
                <p>This App will be released to the public in a web domain (URL), the final user won’t have to download an app to live the experience.</p>
                
              </Col>
              <Col>
                <h3><b>iOs and Android</b> Mobile APP (Sales)</h3>
                <hr/>
                <p>This App would be used in the sales teams. Is not considered to publish in stores.</p>
                <p><small>* For publishing in stores extra times and fees need to be considered</small></p>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <div align="center">
                  <img src="/images/kia/ar/ar1.jpg" className="img-fluid" alt="INNOCEAN MÉXICO" />
                </div>
              </Col>
              <Col>
                <div align="center">
                  <img src="/images/kia/ar/ar2.jpg" className="img-fluid" alt="INNOCEAN MÉXICO" />
                </div>
              </Col>
              <Col>
                <div align="center">
                  <img src="/images/kia/ar/ar3.jpg" className="img-fluid" alt="INNOCEAN MÉXICO" />
                </div>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <div align="center">
                  <img src="/images/kia/ar/ar4.jpg" className="img-fluid" alt="INNOCEAN MÉXICO" />
                </div>
              </Col>
              <Col>
                <div align="center">
                  <img src="/images/kia/ar/ar5.jpg" className="img-fluid" alt="INNOCEAN MÉXICO" />
                </div>
              </Col>
              <Col>
                <div align="center">
                  <img src="/images/kia/ar/ar6.jpg" className="img-fluid" alt="INNOCEAN MÉXICO" />
                </div>
              </Col>
            </Row>
            <hr/>
            <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span> AR APP VS AR WEB</h4>
            <hr/>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>PRO APP</th>
                  <th>CONS APP</th>
                  <th>PRO WEB</th>
                  <th>CONS WEB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Better  interaction with the vehicles</td>
                  <td>Have to download ( time consuming and weight of app aprox 150 mb)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Higher quality 3D Models</td>
                  <td>Payment of licenses and publication in stores</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>More realistic textures, lighting</td>
                  <td>Can use without downloading app</td>
                  <td></td>
                  <td>Lower resolution of 3D Mode</td>
                </tr>
                <tr>
                  <td>AR without QR or triggering image</td>
                  <td> </td>
                  <td>Use just by the link or with QR</td>
                  <td>Less realistic materials and lighting</td>
                </tr>
              </tbody>
            </Table>
            <hr/>
            <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span> Development compatibility</h4>
            <hr/>
            <Row>
              <Col>
                <h3><b>WEB</b> AR</h3>
                <hr/>
                <p>The AR Web version will run in the following browsers:</p>
                <ul>
                  <li>Mozilla Firefox</li>
                  <li>Google Chrome</li>
                  <li>Apple Safari 12.1</li>
                </ul>
              </Col>
              <Col>
                <h3><b>iOs and Android</b></h3>
                <hr/>
                <p>Native Apps that will recquire at least:</p>
                <ul>
                  <li>iOS 12+</li>
                  <li>Android 5.1.1+</li>
                </ul>
              </Col>
            </Row>
            <hr/>
            <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span> 3D Models</h4>
            <hr/>
            <p>The 3d Modelling should have the best quality and detail posible, having as a goal a real appearance rather than a render one, but always keeping in mind we need to optimize  the resources and memory needed to run de app,  in order to mantain the highest usability and speed necessesaryso the client has a great experience while using the implementation.</p>
            <hr/>
            <h5 className="font-weight-bold">Detail</h5>
            <hr/>
            <p>The user should be able to open , close and interact with the vehicle.</p>
            <hr/>
            <h5 className="font-weight-bold">Interior Details</h5>
            <hr/>
            <p>Seats, dashboard, steering wheel, Wireless charger to name a few 6 main interior features per vehicle  are considered.</p>
            <hr/>
            <h5 className="font-weight-bold">Exterior details</h5>
            <hr/>
            <p>The color of the car must be available to change by the clients’ selection. Its important to be able to see details on the wheels, door handles, mirrors and other details. The car must be able to be turned around, open, closed and scalated according to the clients’ interaction.</p>
            <hr/>
              <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span> Development Environment</h4>
            <hr/>
            <h6><span class="lnr lnr-arrow-right"></span> Each area will work under an environment developed in AWS (AMAZON WEB SERVICES):</h6>
            <ul>
              <li>Administrator y users security logins in AWS COGNITO</li>
              <li>Database management in <b>AWS DYNAMODB</b></li>
              <li>Access to services through <b>AWS APIGATEWAY</b></li>
              <li>Developed Microservices in <b>AWS LAMBDAS</b></li>
              <li><b>Security and user data <b>encryption through SSL</b></b></li>
            </ul>
            <hr/>
            <div align="center mt-3 mb-3">
              <img src="/images/kia/server.jpg" className="img-fluid" alt="" alt="" />
            </div>
            <hr/>
            <div align="center mt-3 mb-3">
              <img src="/images/kia/ssl.jpg" className="img-fluid" alt="" alt="" />
            </div>
            <hr/>
            
            
            <hr/>
              <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span> Total Development Time: <b>12 weeks</b></h4>
            <hr/>
            <hr/>
              <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span><b> Price</b></h4>
            <hr/>
            <h5><span class="lnr lnr-plus-circle"></span> Technical and economic proposal for <b>PHASE 1</b></h5>
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
                  <td>Development</td>
                  <td>Development of Apps for iOS and Android + Web AR for browsers considering the new KIA Stinger 2021</td>
                  <td className="text-center">$180,000.00</td>
                  <td className="text-center">$27,000.00</td>
                  <td className="text-center">$255,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>3D Modeling</td>
                  <td>1 model</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$35,000.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$5,250.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$40,250.00</td>
                </tr>
                <tr>
                  <td>2.1</td>
                  <td>3D Modeling</td>
                  <td>4 models</td>
                  <td className="text-center" style={{background: '#FF2D00', color: '#fff'}}>$140,500.00</td>
                  <td className="text-center" style={{background: '#FF2D00', color: '#fff'}}>$21,000.00</td>
                  <td className="text-center" style={{background: '#FF2D00', color: '#fff'}}>$161,500.00</td>
                </tr>
                <tr>
                  <td>2.2</td>
                  <td>3D Modeling</td>
                  <td>6 models</td>
                  <td className="text-center" style={{background: '#AC001E', color: '#fff'}}>$221,730.00</td>
                  <td className="text-center" style={{background: '#AC001E', color: '#fff'}}>$33,259.50</td>
                  <td className="text-center" style={{background: '#AC001E', color: '#fff'}}>$254,989.50</td>
                </tr>
                <tr>
                  <td>2.3</td>
                  <td>3D Modeling</td>
                  <td>12 models</td>
                  <td className="text-center" style={{background: '#5D0200', color: '#fff'}}>$410,000.00</td>
                  <td className="text-center" style={{background: '#5D0200', color: '#fff'}}>$61,500.00</td>
                  <td className="text-center" style={{background: '#5D0200', color: '#fff'}}>$471,500.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Human resources</td>
                  <td>
                    <ul>
                    <li>2 3D Artist</li>
                    <li>2 AR Developer / Unity Specialist</li>
                    <li>Backend Developer</li>
                    <li>Mobile IOs Developer</li>
                    <li>Mobile Android Developer </li>
                    </ul>
                  </td>
                  <td className="text-center">$90,000.00</td>
                  <td className="text-center">$13,500.00</td>
                  <td className="text-center">$93,500.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$305,000.00</b></td>
                  <td className="text-center">$83,750.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$388,750.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$410,500.00</b></td>
                  <td className="text-center">$83,750.00</td>
                  <td className="text-center" style={{background: '#FF2D00', color: '#fff'}}>$388,750.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$491,730.00</b></td>
                  <td className="text-center">$83,750.00</td>
                  <td className="text-center" style={{background: '#ac001e', color: '#fff'}}>$388,750.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL</b></td>
                  <td className="text-center"><b>$680,000.00</b></td>
                  <td className="text-center">$83,750.00</td>
                  <td className="text-center" style={{background: '#5d0200', color: '#fff'}}>$388,750.00</td>
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
                  <td>Monthly maintenance<br/><b>(per month)</b></td>
                  <td>It includes 36hrs of monthly development for  changes or adjustments attached to the delivered system.<br/><small>(cloud infrastructure)</small></td>
                  <td className="text-center">$27,500.00</td>
                  <td className="text-center">$4,125.00</td>
                  <td className="text-center">$31,625.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-right"><b>TOTAL COST PER YEAR</b></td>
                  <td className="text-center"><b>$330,000.00</b></td>
                  <td className="text-center">$49,500.00</td>
                  <td className="text-center" style={{background: '#F05829', color: '#fff'}}>$379,500.00</td>
                </tr>
            
              </tbody>
            </Table>
            <hr/>
              <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span><b> Estimated work plan</b></h4>
            <hr/>
            <p>* 12 Weeks</p>
            <hr/>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">*Activities</th>
                  <th scope="col" colSpan="4">February</th>
                  <th scope="col" colSpan="4">March</th>
                  <th scope="col" colSpan="4">April</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Development</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
                <tr>
                  <th scope="row">3D Modeling</th>
                  <td>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S3</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S4</td>
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
                  <td>S4</td>
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
                  <td>S1</td>
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
                  <td>S1</td>
                  <td>S2</td>
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
                  <td>S1</td>
                  <td>S2</td>
                  <td>S3</td>
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
                  <td style={{background:'#F05829',color:'#fff'}}>S1</td>
                  <td style={{background:'#F05829',color:'#fff'}}>S2</td>
                  <td>S3</td>
                  <td>S4</td>
                </tr>
              </tbody>
            </table>
            <hr/>
              <h4 className="font-weight-bold"><span class="lnr lnr-plus-circle"></span><b> Maintenance</b></h4>
            <hr/>
            <p><b>To be able to give maintenance to the development in the future</b></p>
            <hr/>
            <ul>
              <li><b>Specialized server</b>: with the current server of the Digital team, we can’t risk to have an App with as many demanding resources and as much traffic as this app. More Memory, RAM and structure is needed</li>
            </ul>
            <h4>HUMAN RESOURCES  ( At least the following profiles):</h4>
            <ul>
              <li>3D Artist</li>
              <li>AR Developer / Unity Specialist</li>
              <li>Backend Developer</li>
              <li>Mobile IOs Developer</li>
              <li>Mobile Android Developer </li>
            </ul>
            <h4>Licences</h4>
            <ul>
              <li>Unity Plus License</li>
              <li>Adobe Creative Cloud</li>
              <li>Autodesk Maya</li>
              <li>Apple Developer</li>
              <li>Google Developer</li>
            </ul>
            <hr/>
            <h5 className="pt-3"><span class="lnr lnr-plus-circle"></span> <b>IMPORTANT NOTES</b></h5>
            <hr/>
            <ul>
              <li><b>Any development that is external to the delivered system or exceeds 36hrs a month, will have to be quoted separately.<br/>It is not considered a connection to other systems.</b></li>
              <li>No other development is included that is not within what is described above.</li>
              <li>It does not include new developments or improvements to the platform that are outside of the 36 hours of monthly development,  if any new component is required, it will be priced separately.</li>
              <li>Does not include connections to other systems, if any connection is required, it will be priced separately.</li>
              <li>The development time will begin to count from the approval of the quote.</li>
              <li>The time described only covers business days.</li>
              <li>Maintenance is understood as the constant review and necessary adjustments that ensure the correct operation of the platform.</li>
              <li>The platform will live in the INNOCEAN infrastructure until the end of the project; If the client requires maintenance services, the system continues to live in this same infrastructure, otherwise it is implemented in an account created specifically for the system's own use, releasing INNOCEAN from any responsibility.</li>
              <li>The source code is the intellectual property of INNOCEAN, a copy is provided for the exclusive and sole use of the requested project.</li>
              <li>This quote does not include generation or updating of content (VIDEOS, ARTS, TEXTS, VIRTUAL TOURS or other content that requires preparation by third parties).</li>
              <li>Supports the mentioned languages: Spanish , English and Corean.</li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Layout>
    
  )
}

export default Vr;