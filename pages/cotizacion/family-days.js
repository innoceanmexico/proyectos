import Link from 'next/link'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function FamilyDays() {
  return (
    <Layout>
      <Container className="cotizacion">
        <Row>
          <Col className="d-flex flex-just">
            <h2 className="mt-3 mb-3">
              <span>
                <span style={{ color: '#f0582a' }}>[</span> KIA FAMILY DAYS <span style={{ color: '#f0582a' }}>]</span>
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
            <Link href="/cotizacion/hyundai-seminuevos/"><a className="btn btn-default m-0 mt-3 w-100">ESPAÑOL</a></Link>
          </Col>
          <Col xs={12} md={10}>
            <h5><b><span class="lnr lnr-plus-circle"></span> INTRODUCCIÓN</b></h5>
            <hr/>
            <p>Desarrollo de plataforma para la captura de usuarios y materiales para <b>KIA Family-Days</b>.</p>
            <hr/>
            <h5><b><span class="lnr lnr-plus-circle"></span> FLUJO DE LA PLATAFORMA</b></h5>
            <hr/>
            <div align="center mt-3 mb-3">
              <img src="/images/kia/family-days.svg" className="img-fluid" alt="" alt="" />
            </div>
          </Col>
        </Row>

      </Container>
    </Layout>
    
  )
}

export default FamilyDays;