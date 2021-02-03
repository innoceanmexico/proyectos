import Head from 'next/head'

function Layout({children}) {
  return(
    <>
      <Head>
        <title>INNOCEAN MÉXICO PROYECTOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

      <footer className="footer">
          <img src="images/logo.png" alt="innocean méxico" />
      </footer>
    </>
  )
}

export default Layout;