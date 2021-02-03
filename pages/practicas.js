import Layout from '../components/layout'
import NavbarPrincipal from '../components/navbarPrincipal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Practicas() {
  return (
    <Layout>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> MEJORES PRÁCTICAS AGILE DEVELOPER<span style={{ color: '#f0582a' }}>]</span>
              </span>
            </h2>
            <hr />
          </Col>
        </Row>
        <Row style={{ marginBottom: '90px'}}>
          <Col>
            <h2>1. Blame doesn’t fix bugs</h2>
            <p>Instead of pointing fingers, point to possible solutions. It’s the positive outcome that counts.</p>
            <hr/>
            <h2>2. Don’t fall for the quick hack</h2>
            <p>Invest the energy to keep codeclean and out in the open.</p>
            <hr/>
            <h2>3. Criticize ideas, not people.</h2>
            <p>Take pride in arriving at a solutionrather than proving whose idea isbetter.</p>
            <hr/>
            <h2>4. Do what’s right.</h2>
            <p>Be honest, and have the courageto communicate the truth. It maybe difficult at times; that’s why ittakes courage.</p>
            <hr/>
            <h2>5. Keep up with changing technology.</h2>
            <p>You don’t have to become an expert at everything, but stay aware of where the industry is headed, and plan your career and projects accordingly.</p>
            <hr/>
            <h2>6. Raise the bar for you and your team.</h2>
            <p>Use brown-bag sessions to increase everyone’s knowledge and skills and help bring people together. Get the team excited about technologies or techniques that will benefit your project.</p>
            <hr/>
            <h2>7. Learn the new; unlearn the old.</h2>
            <p>When learning a new technology,unlearn any old habits that mighthold you back. After all, there’smuch more to a car than just ahorseless carriage.</p>
            <hr/>
            <h2>8. Keep asking Why.</h2>
            <p>Don’t just accept what you’re toldat face value. Keep questionin gun til you understand the root ofthe issue.</p>
            <hr/>
            <h2>9. Tackle tasks before theybunch up.</h2>
            <p>It’s easier to tackle commonrecurring tasks when youmaintain steady, repeatableintervals between events.</p>
            <hr/>
            <h2>10. Let your customers decide.</h2>
            <p>Developers, managers, orbusiness analysts shouldn’t makebusiness-critical decisions.Present details to business ownersin a language they canunderstand, and let them makethe decision.</p>
            <hr/>
            <h2>11. A good design is a map; let it evolve</h2>
            <p>Design points you in the rightdirection. It’s not the territoryitself; it shouldn’t dictate the specific route. Don’t let the design(or the designer) hold you hostage.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
    
  )
}

export default Practicas;