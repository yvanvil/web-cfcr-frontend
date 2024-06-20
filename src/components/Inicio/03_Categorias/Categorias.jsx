import Categoria from './Categoria';
import styles from './Categorias.module.css'

const categorias = [
  { name: 'Iluminación LED', srcFondo: '/assets/categoria_1.jpg'},
  { name: 'Equipos para Fajas Transportadoras', srcFondo: '/assets/categoria_2.jpg'},
  { name: 'Instrumentación', srcFondo: '/assets/categoria_3.jpg'}
]

export default function Categorias() {
  return (
    <>
      <div className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.block}></div>
          {categorias.map((categoria, index) => {
            return (
              <Categoria
                name={categoria.name}
                srcFondo={categoria.srcFondo}
                width={350}
                height={375}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </>
  )
};