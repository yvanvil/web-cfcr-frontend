"use client";

import { useState } from 'react';
import styles from './Product.module.css'
import Image from "next/image";

export default function Product(props) {
  const [background, setBackground] = useState({})

  return (
    <div
      className={styles.product}
      onMouseOver={() => setBackground({backgroundImage:`url(${props.srcFondo})`, color:'white', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'})}
      onMouseOut={() => setBackground({})}
      style={background}
    >
      <div className={styles.image}>
        <Image
          src={props.src}
          alt={props.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%'}}
        />
      </div>
      <p className={styles.brand}>{props.brand}</p>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.code}>{props.code}</p>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.certifications}>{props.certifications}</p>
      <button>Ver producto</button>
    </div>
  )
}