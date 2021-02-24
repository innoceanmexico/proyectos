import React, { useState } from 'react';
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container';

export default function Proyectos() {

  const [fade, setFade] = useState(false);

  const kia = (e) => {
    e.preventDefault();
    console.log("kia");
    setFade(!fade);
  }

  const hyundai = (e) => {
    e.preventDefault();
    console.log("hyundai");
    setFade(!fade);
  }

  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div className="presentacion">
        <Container fluid={true} className="p-0 m-0 intro">
          <div align="center">
            <img src="/images/logo-blanco.png" className="mb-4" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
          </div>
          <h2>PRESENTACIÓN PROYECTOS</h2>
          <div className="logos">
            <div align="center">
              <img src="/images/logo-kia-blanco.svg" className="mb-4" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" onClick={kia} />
            </div>
            <div align="center">
              <img src="/images/logo-hyundai.svg" className="mb-4" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" onClick={hyundai} />
            </div>
          </div>
          <h3 className={fade?'fadeIn':'fadeOut'}>DIGITAL DEVELOPMENT</h3>
          <hr/>
        </Container>
      </div>
    </Layout>
  )
}
