import Image from "next/image";
import styles from './Catalogo.module.css'

export default function Catalogo(props) {
  return (
    <>
      <div className={styles.catalogue}>
        <div className={styles.name}>
          <p>{props.name}</p>
        </div>
        <Image
          src={props.src}
          width={0}
          height={0}
          sizes="100vw"
          alt={props.alt}
          style={{ width: '100%', height: 'auto'}}
        />
        <button>Descargar</button>
      </div>
    </>
  )
};
