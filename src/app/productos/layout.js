"use client"

import { useEffect, useState } from 'react'
import styles from "./layout.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link"

const items = [
  { quantity: '3', name: 'Tira LED 10W/m', code: 'IL060301'},
  { quantity: '6', name: 'Reflector LED High Bay 200W 170lm/W', code: 'IL000114'},
  { quantity: '14', name: 'Reflector LED High Bay 200W 170lm/W', code: 'IL000114'},
  { quantity: '5', name: 'Reflector LED High Bay 200W 170lm/W', code: 'IL000114'},
  { quantity: '6', name: 'Reflector LED High Bay 200W 170lm/W', code: 'IL000114'},
  { quantity: '6', name: 'Reflector LED High Bay 200W 170lm/W', code: 'IL000114'},
  { quantity: '1', name: 'Reflector LED High Bay 200W 170lm/W', code: 'IL000114'},
]

export default function RootLayout({ children }) {
  const [scrollY, setScrollY] = useState(0)
  const [scrollY2, setScrollY2] = useState(0)
  
  const initialScroll = 104
  const maxScroll = 1858
  const maxScroll2 = 1594

  const scrollChange = () => {
    switch (true) {
      case (window.scrollY < initialScroll + 20):
        setScrollY(0)
        setScrollY2(0)
        break;
      case (window.scrollY < maxScroll2):
        setScrollY(window.scrollY - initialScroll)
        setScrollY2(window.scrollY - initialScroll)
        break;
      case (window.scrollY < maxScroll):
        setScrollY(window.scrollY - initialScroll)
        setScrollY2(maxScroll2 - initialScroll)
        break;
      default:
        setScrollY(maxScroll - initialScroll)
        setScrollY2(maxScroll2 - initialScroll)
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollChange)

    return () => {
      window.removeEventListener('scroll', scrollChange)
    }
  },[])

  return (
    <>
      <div className={styles.productsPage}>
        <div className={styles.container}>
          <div className={styles.headcrumbSearcher}>
            <div className={styles.headcrumb}>
              <Link
                key={'INICIO'}
                href={'/'}
              >
                INICIO
              </Link>
              <p>&gt;</p>
              <p>PRODUCTOS</p>
            </div>
            <div className={styles.searcher}>
              <input type="text" placeholder='¿Qué producto estás buscando?'/>
              <AiOutlineSearch/>
            </div>
          </div>
          <div className={styles.spq}>
            <div
              className={styles.searchby}
              style={{
                marginTop: scrollY
              }}
            >
              <div className={styles.searchbyCategory}>
                <p>CATEGORÍA</p>
                <ul>
                  <li>Iluminación LED</li>
                  <li>Equipos para Fajas Transportadoras</li>
                  <li>Instrumentación</li>
                </ul>
              </div>
              <div className={styles.searchbySubcategory}>
                <p>SUBCATEGORIAS</p>
                <ul>
                  <li>Tiras LED</li>
                  <li>Reflectores LED</li>
                </ul>
              </div>
            </div>
            <div className={styles.productsContainer}>
              <div className={styles.header}>
                <p>
                  Mostrando <span>15</span> de <span>1000</span> productos
                </p>
                <p>
                  Ordenar por
                  <select className={styles.orderby}>
                    <option>Más reciente</option>
                    <option>Nombre, ascendente</option>
                    <option>Nombre, descendente</option>
                    <option>Relevancia</option>
                  </select>
                </p>
              </div>
              <div className={styles.products}>
                {children}
              </div>
              <div className={styles.footer}>
                <button>Ver más</button>
              </div>
            </div>
            <div
              className={styles.quotation}
              style={{
                marginTop: scrollY2
              }}
            >
              <p>Productos por cotizar</p>
              <ul>
                {items.map((item, index) => {
                  return (
                    <li className={styles.item} key={index}>
                      <p className={styles.quantity}>{item.quantity}</p>
                      <div className={styles.description}>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.code}>({item.code})</p>
                      </div>
                    </li>
                  )
                })}
                <button>Cotizar</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}