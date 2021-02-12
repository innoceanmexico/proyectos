import NavbarPrincipal from '../../components/navbarPrincipal'
import Layout from '../../components/layout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Proyectos() {
  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div className="digital">
        <Container fluid={true} className="p-0 m-0">
          <div className="mascara">
            <img src="/images/logo-blanco.png" className="mb-4" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
            <h2>DIGITAL DEVELOPMENT</h2>
            <h3>MÉXICO</h3>
            <hr/>
            <div className="menu">
              <Link href="/">
                <a>
                  <img src="/images/iconos/coding.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>coding</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="/images/iconos/cloud-computing.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>cloud</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="/images/iconos/development.svg" alt="" title="" />
                  <p>profits</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="/images/iconos/web.svg" alt="" title="" />
                  <p>web</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="/images/iconos/repair.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>testing</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="/images/iconos/development-people.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>team</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <img src="/images/iconos/web-development.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>development</p>
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
