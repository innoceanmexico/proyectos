import Head from 'next/head'

function LayoutDashboard({children}) {
  return(
    <>
      <Head>
        <title>DASHBOARD | HYUNDAI MÉXICO PROYECTOS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap" rel="stylesheet" /> 
      </Head>

      {children}

    </>
  )
}

export default LayoutDashboard;