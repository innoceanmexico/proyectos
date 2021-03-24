import React, { useState } from 'react'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Dashboards(){

  const [acceso, setAcceso] = useState(false);

  const usuario = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    if(password === elusuario){
      console.log(password);
      setAcceso(true);
    } else {
      console.log("No es usuario");
      setAcceso(false);
    }
  }

  return(
    <Layout>
      <Container>
        <Row>
          <Col>
            <hr/>
            <h2>LOGIN DE USUARIOS</h2>
            <hr/>
            <Form method="POST" onSubmit={usuario}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Contraseña" name="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  INGRESAR
                </Button>
              </Form>
          </Col>
        </Row>
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