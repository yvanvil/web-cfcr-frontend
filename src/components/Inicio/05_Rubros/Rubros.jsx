import Rubro from './Rubro';
import styles from './Rubros.module.css'

const rubros = [
  { title1: 'Soluciones integrales para', title2: 'Minería', srcFondo: '/assets/industrias_1.jpg', altFondo: ''}
]

export default function Rubros() {
  return (
    <>
      <div className={styles.sectors}>
        <div className={styles.container}>
          {rubros.map((rubro, index) => {
            return (
              <Rubro
                title1={rubro.title1}
                title2={rubro.title2}
                srcFondo={rubro.srcFondo}
                altFondo={rubro.altFondo}
                key={index}
              />
            )
          })}
          <div className={styles.block}></div>
        </div>
      </div>
    </>
  )
};