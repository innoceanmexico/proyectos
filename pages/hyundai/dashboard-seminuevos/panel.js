import Link from 'next/link'
import LayoutDashboard from '../../../components/layout-dashboard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styles from '../../../styles/Home.module.css'

export default function PanelSeminuevos() {
  return (
    <LayoutDashboard>
      <Row style={{ background: '#002B5E'}}>
        <Col>
          <p className="pt-3 pr-3 float-right text-white"><small><b>Usuario:</b> Rodolfo Sanchez Cordero</small></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr/>
          <div align="center">
            <img src="/images/hyundai-logo-wide-blue.svg" alt="innocean méxico" style={{
              width: '250px'
            }} />
          </div>
          <hr/>
          <ul className="hyundais categos">
            <li>
              <Link href="">
                <a className="btn-hyundai">
                <span class="lnr lnr-chevron-right"></span> TODOS
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="btn-hyundai">
                <span class="lnr lnr-chevron-right"></span> AGREGAR
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="btn-hyundai">
                <span class="lnr lnr-chevron-right"></span> EDITAR
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="btn-hyundai">
                <span class="lnr lnr-chevron-right"></span> ELIMINAR
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a className="btn-hyundai">
                <span class="lnr lnr-chevron-right"></span> SALIR
                </a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={9}>

        </Col>
      </Row>
    </LayoutDashboard>
  )
}