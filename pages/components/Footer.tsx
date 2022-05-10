import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.nav_container}>
        <h4>Lucent Esports</h4>
        <ul className={styles.nav_list}>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/news'>
            <a>News</a>
          </Link>
          <Link href='/teams'>
            <a>Teams</a>
          </Link>
          <Link href='/fixtures'>
            <a>Fixtures</a>
          </Link>
          <Link href='/store'>
            <a>Store</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>                  
        </ul>
      </section>
      <section className={styles.logo_container}>
        <Image className={styles.logo} src='/img/lucent_logo.webp' alt='lucent logo' loading='lazy' layout='intrinsic' width={273} height={88}/>
      </section>
      <section className={styles.content_container}>
        <h5>Lucent Esports Limited  | Company Number:  12876349</h5>
      </section>
    </footer>
  )
}

export default Footer