import Head from "next/head"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function fixtures() {
  return (
    <>
    <Head>
      <title>Lucent Esports | Fixtures</title>
    </Head>

    <Navbar/>

      <main className="coming_soon">
        <h1>COMING SOON</h1>
      </main>

    <Footer/>
    </>
  )
}

export default fixtures