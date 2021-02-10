import Link from 'next/link'
import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Fte() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> Full Time Equivalent (FTE) <span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="submenu">
            <Link href="/fte/calculator">INNOCEAN FTE CALCULATOR</Link>
          </div>
          <hr/>
          </Col>
        </Row>
        <Row style={{ marginBottom: '90px'}}>
          <Col>
            <h2><span class="lnr lnr-arrow-right"></span> DEFINITION</h2>
            <hr/>
            <p>Full Time Equivalent (FTE) refers to the unit of measurement equivalent to an individual – worker or student – one unit of a work or school day, applicable in a variety of contexts. In most cases, full time equivalents measure an employee or student and/or their workload.</p>
            <hr/>
            <h2><span class="lnr lnr-arrow-right"></span> Calculating FTEs</h2>
            <hr/>
            <p>The breakdown for an average, full-time worker and their hours on an annual basis is calculated by assuming the worker follows an 8-hour workday and works five days out of the week:</p>
            <p className="text-center"><b>8 hours per day  x  5 days per week  =  40 hours</b></p>
            <p>The figure is then multiplied by the number of weeks worked every year:</p>
            <p className="text-center"><b>40 hours per week  x  52 weeks per year  =  2,080 hours</b></p>
            <p>This is how a company, on average, calculates the average yearly number of hours that a full-time employee works.</p>
            <hr/>
            <h2><span class="lnr lnr-arrow-right"></span> The Importance of Determining FTEs</h2>
            <hr/>
            <p>For a business, specifically those with a large number of part-time workers, converting worked hours into FTEs is important in helping the company know how many full-time employees the part-time workers are equal to.</p>
            <p>In the end, is important for a company to determine FTEs because it allows it to gain a better understanding of the effectiveness and usefulness of its part-time workers, based on the amount of work done and perhaps, most importantly, because part-time workers are generally paid less and don’t receive the same benefits that must be offered to full-time employees. All the above mentioned factors end up costing the company something and affect its bottom line.</p>
            <hr/>
            <h2><span class="lnr lnr-arrow-right"></span> What does FTE mean?</h2>
            <hr/>
            <p>FTE stands for “full-time equivalent.” It refers to the number of hours worked by a single employee in a week. The annual FTE count is considered to be 2,080 hours, which breaks out into eight hours per day, five days a week. <b>FTE is used to convert the hours worked by part-time employees into those worked by full-time employees</b>. This is for ease of calculating the cost — in time, money and personnel — of the project, since it standardizes the measurements.</p>
            <p><b>So if you have one employee who worked 50 hours, one employee who worked 10 hours, and one employee who worked 40 hours on a project in a given week, that adds up to 100 total hours that week; assuming a full-time employee works 40 hours per week, your FTE is 2.5.</b></p>
            <p>The FTE calculation is used in project management — and resource management, specifically — when staffing decisions need to be made. For example, if you have a construction project that is estimated to require 500 hours of work, you can determine your personnel requirements using the following FTE equation: 8 hours x (number of full-time employees) x (number of days worked) = 500 hoursIf you go ahead and divide 500 by eight, this means the number of full-time employees needed to work full eight-hour days is 62.5:(number of full-time employees) x (number of days worked) = 500 hours/8 hours = 62.5</p>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Fte;