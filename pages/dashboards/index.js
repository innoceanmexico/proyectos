import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Dashboards(){
  return(
    <Layout>
      <Container>
        <Row>
          <Col>
            <hr/>
            <h2>HYUNDAI</h2>
            <hr/>
            <iframe width="600" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiYjMxY2JiYmQtOGZjZi00NTg5LTkxYjktNmQ5ZGUxMGZkNTJkIiwidCI6Ijc1ZTRiMWFiLWU4YjAtNDY4My1iMjljLTMwMGY2MmUzN2QxYiJ9&pageName=ReportSection1a6b68e094b626bd7a2a" frameborder="0" allowFullScreen="true" style={{width: '100%'}}></iframe>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr/>
            <h2>KIA</h2>
            <hr/>
            <iframe width="600" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiNjE2NDI0MTctNmIwYi00YTViLWE1MDEtNzJmZTIxZjBlMmRiIiwidCI6Ijc1ZTRiMWFiLWU4YjAtNDY4My1iMjljLTMwMGY2MmUzN2QxYiJ9&pageName=ReportSection93c26f9d4d4b21702748" frameborder="0" allowFullScreen="true" style={{width: '100%'}}></iframe>
          </Col>
        </Row>
        <Row STYLE={{marginBottom: '90px'}}>
          <Col>
            <hr/>
            <h2>KIA - CSA</h2>
            <hr/>
            <iframe width="600" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiMDA4MTZlYWQtOWRhMS00YTBlLThiN2QtZmQ0YTkzZGFiZWIzIiwidCI6Ijc1ZTRiMWFiLWU4YjAtNDY4My1iMjljLTMwMGY2MmUzN2QxYiJ9&pageName=ReportSection12f886136108bf01301b" frameborder="0" allowFullScreen="true" style={{width: '100%'}}></iframe>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}