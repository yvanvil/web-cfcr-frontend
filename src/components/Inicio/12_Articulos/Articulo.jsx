import Image from "next/image";
import styles from './Articulo.module.css'

export default function Articulo(props) {
  return (
    <>
      <div className={styles.article}>
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
        <p className={styles.title}>{props.title}</p>
        <p className={styles.description}>{props.description}</p>
        <button>Leer más</button>
      </div>
    </>
  )
};