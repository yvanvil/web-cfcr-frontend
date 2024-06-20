import Link from "next/link"
import styles from './Navbar.module.css'
import { usePathname } from "next/navigation"

const links = [
  { name: 'INICIO', href: '/'},
  { name: 'PRODUCTOS', href: '/productos'},
  { name: 'NOSOTROS', href: '/nosotros'},
  { name: 'SERVICIOS', href: '/servicios'},
  { name: 'BLOG', href: '/blog'},
  { name: 'CONTACTO', href: '/contacto'},
]

export default function NavLinks(props) {
  const pathname = usePathname();
  
  return (
    <ul className={props.style}>
      {links.map((link) => {
        return (
          <li key={`nav-item-${link.name}`}>
            <Link
              key={link.name}
              href={link.href}
              className={pathname === link.href ? styles.activepage:{}}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
};