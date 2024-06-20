"use client";

import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Image from "next/image";
import NavLinks from './NavLinks';
import { usePathname } from 'next/navigation';

export default function Navbar () {
  //change nav when scrolling
  const [sticky, setSticky] = useState(false)
  const scrollHeader = () => {
    if (window.scrollY >= 10) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  // window.addEventListener('load', scrollHeader)

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  },[])

  const pathname = usePathname();

  return (
    <>
      <nav 
        className={
          pathname === "/" ?
            (sticky ? 
              `${styles.navbar} ${styles.sticky}` : 
              styles.navbar) :
            `${styles.navbar} ${styles.sticky2}`
        }
      >
        <div className={styles.container}>
          <Image
            src={'/assets/logo_blanco.png'}
            width={200}
            height={40}
            alt='logo'
            priority={true}
          />
          <NavLinks style={styles.menu}/>
        </div>
      </nav>
    </>
  )
}