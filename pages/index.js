import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <main className={styles.main}>
          <h1 className={styles.title}>
            PROYECTOS <span className="naranja">DIGITAL WEB</span>
          </h1>
        </main>
      </div>
    </Layout>
  )
}
