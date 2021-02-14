import Layout from '../../../components/layout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'

export default function Proyectos() {
  return (
    <Layout>
      {/*<NavbarPrincipal />*/}
      <div className="digital hcamiones">
        <Container fluid={true} className="p-0 m-0">
          <div className="mascara">
            <h2>HYUNDAY</h2>
            <h3>CAMIONES Y BUSES</h3>
            <hr/>
            <div className="menu">
              <Link href="/digital/development">
                <a>
                  <img src="/images/iconos/web-development.svg" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
                  <p>development</p>
                </a>
              </Link>
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
              
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
