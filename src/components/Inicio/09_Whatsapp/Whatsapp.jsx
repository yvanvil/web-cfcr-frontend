import styles from './Whatsapp.module.css'
import Image from "next/image";

export default function Whatsapp() {
  return (
    <>
      <div className={styles.whatsapp}>
        <div className={styles.container}>
          <div className={styles.phoneImage}>
            <Image
              src={'/assets/cliente.png'}
              alt={''}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: '100%'}}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.contentL}>
              <p className={styles.title1}>¿Tienes algún inconveniente?</p>
              <div className={styles.phoneNumber}>
                <Image
                  src={'/assets/icono_whatsapp.png'}
                  alt={''}
                  width={50}
                  height={50}
                  priority={true}
                />
                <p className={styles.title2}>969 826 301</p>
              </div>
            </div>
            <div className={styles.contentR}>
              <p className={styles.title1}>¿Necesitas asesoría?</p>
              <div className={styles.phoneNumber}>
                <Image
                  src={'/assets/icono_whatsapp.png'}
                  alt={''}
                  width={50}
                  height={50}
                  priority={true}
                />
                <p className={styles.title2}>969 826 301</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};