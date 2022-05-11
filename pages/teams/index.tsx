import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function teams() {
  return (
    <>
    <Head>
      <title>Lucent Esports | Teams</title>            
    </Head>

    <Navbar/>

      <main className="coming_soon">
        <h1>COMING SOON</h1>
      </main>

    <Footer/>
    </>
  )
}

export default teams