import Link from 'next/link'
import LayoutDashboard from '../../../components/layout-dashboard'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styles from '../../../styles/Home.module.css'

export default function DashboardSeminuevos() {
  return (
    <LayoutDashboard>
      <div className="container dashboard">
        <main className={styles.main}>
          <Card className={styles.cartadashboard}>
            <div align="center">
              <img src="/images/hyundai-logo-wide-blue.svg" alt="innocean méxico" style={{
                width: '250px'
              }} />
            </div>
            <Card.Body>
              <Card.Title>LOGIN DE USUARIOS</Card.Title>
              <hr/>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Correo electrónico:</Form.Label>
                  <Form.Control type="email" placeholder="Ingresar correo electrónico" />
                  <Form.Text className="text-muted">
                    Sus datos nunca serán compartidos.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control type="password" placeholder="Ingresar contraseña" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Guardar" />
                </Form.Group>
                <Link href="/hyundai/dashboard-seminuevos/panel">
                  <a className="btn-default float-right">
                    Ingresar
                  </a>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </main>
      </div>
    </LayoutDashboard>
  )
}
