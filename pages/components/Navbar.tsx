import Link from 'next/link';
import React, { useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import { useRouter } from 'next/router'

function Navbar() {
    const [open,setOpen] = useState(false);    
    const router = useRouter();
  return (
    <header className={styles.container}>
        <nav className={styles.navbar}>
            <Link href='/' passHref>
                <div className={styles.logo_container}>
                    <img className={styles.logo} src='/img/lucent_logo.webp'/>
                </div>
            </Link>
            <ul id='nav-menu' className={styles.menu}>
                <Link href='/news' passHref>
                    <li className={styles.item}><a href='/news' className={router.pathname == '/news' ? styles.link_current : styles.link}>News</a></li>
                </Link>
                <Link href='/teams' passHref>
                    <li className={styles.item}><a href='/teams' className={router.pathname == '/teams' ? styles.link_current : styles.link}>Teams</a></li>
                </Link>
                <Link href='/fixtures' passHref>
                    <li className={styles.item}><a href='/fixtures' className={router.pathname == '/fixtures' ? styles.link_current : styles.link}>Fixtures</a></li>
                </Link>
                <Link href='/store' passHref>
                    <li className={styles.item}><a href='/store' className={router.pathname == '/store' ? styles.link_current : styles.link}>Store</a></li>
                </Link>
                <Link href='/about' passHref>
                    <li className={styles.item}><a href='/about' className={router.pathname == '/about' ? styles.link_current : styles.link}>About</a></li>
                </Link>
            </ul>
            <div className={styles.right_container}>
                <h4>Menu</h4>
                <button className={styles.hamburger_container} onClick={() => setOpen(!open)}>
                    <span className={open ? styles.hamburger_open : styles.hamburger}></span>
                </button>
            </div>            
        </nav>
    </header>
  )
}

export default Navbar



