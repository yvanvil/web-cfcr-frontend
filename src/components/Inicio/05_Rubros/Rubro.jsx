import Image from "next/image";
import styles from './Rubro.module.css'

export default function Rubro(props) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>
          <p className={styles.title1}>{props.title1}</p>
          <p className={styles.title2}>{props.title2}</p>
        </div>
        <Image
          src={props.srcFondo}
          width={0}
          height={0}
          sizes="100vw"
          alt={props.altFondo}
          style={{ width: '50%', height: '100%'}}
        />
      </div>
    </>
  )
};
