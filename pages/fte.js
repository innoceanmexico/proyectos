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
        <Row style={{ marginBottom: '90px'}}>
          <Col>
            <h2><span class="lnr lnr-arrow-right"></span> DEFINITION</h2>
            <p>Full Time Equivalent (FTE) refers to the unit of measurement equivalent to an individual – worker or student – one unit of a work or school day, applicable in a variety of contexts. In most cases, full time equivalents measure an employee or student and/or their workload.</p>
            <h2><span class="lnr lnr-arrow-right"></span> Calculating FTEs</h2>
            <p>The breakdown for an average, full-time worker and their hours on an annual basis is calculated by assuming the worker follows an 8-hour workday and works five days out of the week:</p>
            <p className="text-center"><b>8 hours per day  x  5 days per week  =  40 hours</b></p>
            <p>The figure is then multiplied by the number of weeks worked every year:</p>
            <p className="text-center"><b>40 hours per week  x  52 weeks per year  =  2,080 hours</b></p>
            <p>This is how a company, on average, calculates the average yearly number of hours that a full-time employee works.</p>
            <h2><span class="lnr lnr-arrow-right"></span> The Importance of Determining FTEs</h2>
            <p>For a business, specifically those with a large number of part-time workers, converting worked hours into FTEs is important in helping the company know how many full-time employees the part-time workers are equal to.</p>
            <p>In the end, is important for a company to determine FTEs because it allows it to gain a better understanding of the effectiveness and usefulness of its part-time workers, based on the amount of work done and perhaps, most importantly, because part-time workers are generally paid less and don’t receive the same benefits that must be offered to full-time employees. All the above mentioned factors end up costing the company something and affect its bottom line.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Fte;