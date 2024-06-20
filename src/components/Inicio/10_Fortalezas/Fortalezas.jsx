import styles from './Fortalezas.module.css'

export default function Fortalezas() {
  return (
    <>
      <div className={styles.strengths}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p>¿Por qué elegirnos?</p>
          </div>
          <div className={styles.content}>
            <div>
              <p>{(new Date().getFullYear()) - 2009} años de experiencia</p>
            </div>
            <div>
              <p>Puntualidad</p>
            </div>
            <div>
              <p>Integridad y honestidad</p>
            </div>
            <div>
              <p>Compromiso con la calidad</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};