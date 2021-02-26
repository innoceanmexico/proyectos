import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className="container entrada">
        <main className={styles.main}>
          <Link href="/proyectos">
            <h1 className={styles.title}>
              PROYECTOS <span className="naranja">DIGITAL WEB</span>
            </h1>
          </Link>
          <h2 className="text-white pt-4">INNOCEAN MÉXICO</h2>
          
          <Link href="/proyectos">
            <button className="btn btn-default">INGRESAR</button>
          </Link>
        </main>
      </div>
    </Layout>
  )
}
