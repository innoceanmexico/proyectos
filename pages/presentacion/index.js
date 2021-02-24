import React, { useState } from 'react';
import NavbarPrincipal from '../../components/navbarPrincipal'
import Layout from '../../components/layout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Proyectos() {

  const [count, setCount] = useState(0);

  const kia = (e) => {
    e.preventDefault();
    console.log("kia");
    setCount(count + 1)
  }

  const hyundai = (e) => {
    e.preventDefault();
    console.log("hyundai");
    setCount(count + 1)
  }

  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div className="presentacion">
        <Container fluid={true} className="p-0 m-0 intro">
          <div align="center">
            <img src="/images/logo-blanco.png" className="mb-4" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
          </div>
          <h2>PRESENTACIÓN</h2>
          <h3>DIGITAL DEVELOPMENT {count}</h3>
          <hr/>
          <div className="logos">
            <div align="center">
              <img src="/images/logo-kia-blanco.svg" className="mb-4" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" onClick={kia} />
            </div>
            <div align="center">
              <img src="/images/logo-hyundai.svg" className="mb-4" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" onClick={hyundai} />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
