"use client";

import styles from './Footer.module.css'
import Image from "next/image";
import {BiLogoFacebookSquare , BiLogoLinkedinSquare , BiLogoWhatsapp } from 'react-icons/bi';
import {AiOutlineEnvironment, AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import Link from "next/link"

const links = [
  { name: 'Productos', href: '/productos'},
  { name: 'Nosotros', href: '/nosotros'},
  { name: 'Servicios', href: '/servicios'},
  { name: 'Blog', href: '/blog'},
  { name: 'Contacto', href: '/contacto'},
]

export default function Footer () {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.cols}>
            <div className={styles.col1}>
              <Image
                src={'/assets/logo_blanco.png'}
                alt='logo'
                width={200}
                height={40}
                priority={true}
              />
              <div className={styles.social}>
                <p>Síguenos:</p>
                <div>
                  <a href="https://www.facebook.com/CFCRsac/" target="_blank" rel="noopener noreferrer">
                    <BiLogoFacebookSquare  size={20}/>
                  </a>
                  <a href="https://www.linkedin.com/company/34224418/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
                    <BiLogoLinkedinSquare  size={20}/>
                  </a>
                  <a href="https://wa.me/51969826301" target="_blank" rel="noopener noreferrer">
                    <BiLogoWhatsapp  size={20}/>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.col2}>
              <p className={styles.title}>Contacto</p>
              <div>
                <AiOutlineEnvironment size={15}/>
                <a href="https://maps.app.goo.gl/exrMCrgccAEGFWSf6" target="_blank" rel="noopener noreferrer">
                  Av. Los Constructores 1036, La Molina, Lima, Perú
                </a>
              </div>
              <div>
                <AiOutlinePhone size={15}/>
                <a href="https://wa.me/51969826301" target="_blank" rel="noopener noreferrer">
                  (51) 969 826 301
                </a>
              </div>
              <div>
                <AiOutlineMail size={15}/>
                <a href="mailto:ventas@corporacionfcr.com.pe">
                  ventas@corporacionfcr.com.pe
                </a>
              </div>
            </div>
            <div className={styles.col3}>
              <p className={styles.title}>Páginas</p>
              <div>
                <ul>
                  {links.map((link) => {
                    return (
                      <li key={`nav-item-${link.name}`}>
                        <Link
                          key={link.name}
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>Copyright © {(new Date().getFullYear())} Corporación FCR S.A.C. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}