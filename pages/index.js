import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <main className={styles.main}>
          <Link href="/proyectos">
            <h1 className={styles.title}>
              PROYECTOS <span className="naranja">DIGITAL WEB</span>
            </h1>
          </Link>
        </main>
      </div>
    </Layout>
  )
}
