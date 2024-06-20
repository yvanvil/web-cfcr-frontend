import styles from './Suscripcion.module.css'
import Image from "next/image";

export default function Suscripcion() {
  return (
    <>
      <div className={styles.subscription}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={'/assets/formulario.jpg'}
              alt={''}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto'}}
            />
          </div>
          <div className={styles.contentL}></div>
          <div className={styles.contentR}>
            <div className={styles.title}>
              <p className={styles.title1}>Suscríbete y accede a un</p>
              <div className={styles.title2}>
                <p className={styles.title21}>10%</p>
                <p className={styles.title22}>En tu primera compra</p>
              </div>
            </div>
            <form action="">
              <input type="text" placeholder='Nombre' />
              <input type="email" placeholder='Correo' />
              <input type="tel" placeholder='Celular' />
              <input type="text" placeholder='Producto interesado' />
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};