import Layout from '../../../components/layout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'

export default function Proyectos() {
  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div className="digital distribuidores">
        <Container fluid={true} className="p-0 m-0">
          <div className="mascara">
            <h2>HYUNDAY</h2>
            <h3>DISTRIBUIDORES</h3>
            <hr/>
            <div className="menu">
              <Link href="/hyundai/distribuidores/resumen/">
                <a>
                  <img src="/images/iconos/web-development.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>PROYECTO</p>
                </a>
              </Link>
              {/* 
              <Link href="/hyundai/camiones/development/">
                <a>
                  <img src="/images/iconos/coding.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>Características</p>
                </a>
              </Link>
              <Link href="/hyundai/camiones/">
                <a>
                  <img src="/images/iconos/cloud-computing.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>Equipo</p>
                </a>
              </Link>
              <Link href="/hyundai/camiones/">
                <a>
                  <img src="/images/iconos/development.svg" alt="" title="" />
                  <p>plan</p>
                </a>
              </Link>
              */}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
