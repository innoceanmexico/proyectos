import Link from 'next/link'
import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Desarrollo() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
      <Row style={{ marginBottom: '90px'}}>
        <Col>
          <h2 className="mt-3">
            <span>
              <span style={{ color: '#f0582a' }}>[</span> PROPUESTA DIGITAL DEVELOPMENT MEXICO <yspan style={{ color: '#f0582a' }}>]</span>
            </span>
          </h2>
          <hr />
          <div className="submenu">
            <Link href="/desarrollo/product-roadmap">PRODUCT ROADMAP</Link>
            <Link href="/desarrollo/agile-rituals">AGILE RITUALS</Link>
            <Link href="/digital">DIGITAL</Link>
          </div>
          <hr/>
          <h3>INNOCEAN MÉXICO Development workflow</h3>
          <p>INNOCEAN Compañia global de comunicación y marketing con 18 operaciones en el mundo y más de 1,700 empleados.</p>
          <hr />
          <h4><span className="lnr lnr-arrow-right"></span> AGILE SCRUM WORKFLOW de desarrollo INNOCEAN MÉXICO</h4>
          <hr />
          <p>This is designed to <span style={{ color: '#f0582a' }}>[</span><b> guide teams in the iterative and incremental delivery of a digital product in INNOCEAN MÉXICO </b><span style={{ color: '#f0582a' }}>]</span>. Often referred to as “an agile project management framework,” its focus is on the use of an empirical process that allows teams to <b>respond rapidly, efficiently, and effectively to product/client requirements</b>.</p>
          <h5>Fixes time and cost in an effort to control requirements.</h5>
          <p>The involvement of the client/business throughout the project is critical as we rely heavily on the collaboration between the team and the customer or customer representative to create the right product in a lean fashion.</p>
          <hr />
          <h4><span className="lnr lnr-arrow-right"></span> PROCESO de desarrollo INNOCEAN MÉXICO</h4>
          <hr />
          <ul>
            <li>The project begins with a clear vision provided by the business (BRIEFING), and a set of product features in order of importance.
            <ul>
                <li>These features are part of the product backlog, which is maintained by the customer or customer representative referred to as the Product Owner.</li>
              </ul>
            </li>
            <li>Time box commonly referred to as an iteration or sprint, is the set amount of time that the team has to complete the features selected.
            <ul>
                <li>The team selects items from the product backlog that it believes can be completed in the sprint, and creates a sprint backlog consisting of the features and tasks as part of the sprint-planning meeting.</li>
              </ul>
            </li>
            <li>Once the team has committed to a sprint backlog, the task work begins.
            <ul>
                <li>During this time in the sprint, the team is protected from interruptions and allowed to focus on meeting the sprint goal.</li>
                <li>No changes to the sprint backlog are allowed; however, the product backlog can be changed in preparation for the next sprint.</li>
              </ul>
            </li>
            <li>During the sprint, the team checks in daily with each other in the form of a 15-minute meeting known as a scrum.
          </li>
            <li>At the end of the sprint, the team demos the work they have completed to the stakeholders and gathers feedback that will affect what they work on in the next sprint.
            <ul>
                <li>This meeting is critical, as its focus is on the three pillars of Scrum: transparency, inspection, and adaptation.</li>
              </ul>
            </li>
          </ul>
          <div align="center">
            <img src="https://github.com/innoceanmexico/workflow/raw/master/public/scrum.jpg" alt="innocean méxico" title="innocean méxico" />
          </div>
          <hr />
          <h4><span className="lnr lnr-arrow-right"></span> Aplicación del SCRUM en INNOCEAN MÉXICO</h4>
          <hr />
          <h5>Scrum is applied by following a set of ceremonies, or meetings.</h5>
          <h6>A ) Sprint Planning Meeting</h6>
          <p>The Product Owner/Client presents the set of features he or she would like to see completed in the sprint (the “what”) then the team determines the tasks needed to implement these features (the “how”).</p>
          <ul>
            <li>Work estimates are reviewed to see if the team has the time to complete all the features requested in the sprint. If so, the team commits to the sprint. If not, the lower priority features go back into the product backlog.</li>
          </ul>
          <h6>B ) Tracking Progress</h6>
          <p>The team begins to track its progress using highly visible information radiators. These radiators include the burndown chart and the task board.</p>
          <p><b>**The task board** (SLACK?) is used by the team to track the progress of the tasks for each feature.</b></p>
          <p>The minimum columns used are <b>To Do, Doing, and Done</b>. Teams will have their daily scrum meeting at the task board, and move items across the board when stating what they did yesterday, what they plan to do today, and what obstacles they are grappling with</p>
          <div align="center">
            <img src="https://github.com/innoceanmexico/workflow/raw/master/public/todos.jpg" alt="" title="" />
          </div>
          <h6>C ) Sprint Review</h6>
          <p>At the end of the sprint, the <b>team invites stakeholders to a sprint review meeting where the features that were completed in the sprint are demo'd and feedback is requested</b>. The Product Owner keeps track of the feedback and incorporates it as needed into the product backlog.</p>
          <p>Once the review is complete, the team (without the stakeholders) conducts a retrospective to determine what they did well that they wish to continue doing, what they struggled with, and what recommendations they have for change going forward.</p>
          <hr />
          <h2><span className="lnr lnr-arrow-right"></span> Release Planning - INNOCEAN MÉXICO</h2>
          <hr />
          <p>Release Planning is also part of Scrum, and is a way to do long-term planning for a time box that consists of multiple sprints. This is often done quarterly, and the results of the quarter do not have to be a release to the customer, but may simply be an internal release to confirm system integration and validation.</p>
          <p>The entire team attends the release-planning meeting, where the Product Owner presents the features she/he would like to see completed in the quarter.</p>
          <div align="center">
            <img src="https://github.com/innoceanmexico/workflow/raw/master/public/release.jpg" alt="innocean méxico" title="innocean méxico" />
          </div>
        </Col>
      </Row>
    </Container>
    </Layout>
    
  )
}

export default Desarrollo;
