import React, { useState } from 'react';
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

export default function Proyectos() {

  const [fade, setFade] = useState(false);
  const [marca, setMarca] = useState("INNOCEAN");

  const kia = (e) => {
    e.preventDefault();
    setFade(true);
    setMarca("KIA MOTORS")
  }

  const hyundai = (e) => {
    e.preventDefault();
    setFade(true);
    setMarca("HYUNDAI")
  }

  const vinte = (e) => {
    e.preventDefault();
    setFade(true);
    setMarca("GRUPO VINTE")
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
            <div align="center">
              <img src="/images/vinte-logo.png" className="mb-4" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" onClick={vinte} />
            </div>
          </div>
          <h4 className={fade?'fadeIn':'fadeOut'}>DIGITAL DEVELOPMENT <b>{marca}</b></h4>
          <div className={fade?'fadeIn':'fadeOut'}>
            {marca==="KIA MOTORS"?
              (
                <ul className="proyectos">
                  <li><Link href="/cotizacion/kiacom">KIA.COM</Link></li>
                  <li><Link href="/cotizacion/kiacareers">KIA CAREERS</Link></li>
                  <li><Link href="/cotizacion/livechat">LIVE CHAT</Link></li>
                  <li><Link href="/cotizacion/vr">KIA AR</Link></li>
                  <li><Link href="/cotizacion/kiapet">KIA PET</Link></li>
                </ul>
              )
            : marca==="HYUNDAI"?
              (
                <ul className="proyectos">
                  <li><Link href="/cotizacion/hyundai-distribuidores">DISTRIBUIDORES</Link></li>
                  <li><Link href="/cotizacion/hyundai-seminuevos">SEMINUEVOS</Link></li>
                  <li><Link href="/hyundai/camiones">CAMIONES Y BUSES</Link></li>
                </ul>
              )
            :
              (
                <ul className="proyectos">
                  <li><Link href="/cotizacion/vinte">LIVE CHAT</Link></li>
                </ul>
              )
            }
          </div>
          <hr/>
        </Container>
      </div>
    </Layout>
  )
}
