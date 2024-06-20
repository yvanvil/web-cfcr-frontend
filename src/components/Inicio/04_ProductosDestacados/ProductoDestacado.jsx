import Image from "next/image";
import styles from './ProductoDestacado.module.css'
import { useState } from "react";

export default function ProductoDestacado(props) {
  const [background, setBackground] = useState({})
  
  return (
    <>
      <div
        className={styles.featuredProduct}
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
            style={{ width: '100%', height: 'auto'}}
          />
        </div>
        <p className={styles.brand}>{props.brand}</p>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.certifications}>{props.certifications}</p>
        <button>Cotizar producto</button>
      </div>
    </>
  )
};