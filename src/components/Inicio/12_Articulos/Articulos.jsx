import Articulo from './Articulo';
import styles from './Articulos.module.css'

const articulos = [
  { src: '/assets/articulo_1.jpg', alt: '', title: 'Soluciones de Iluminación de Tiras LED para Minería Subterránea', description: 'En primer lugar, hay que saber que no todas las Tiras LED pueden utilizarse en túneles...'},
  { src: '/assets/articulo_2.jpg', alt: '', title: 'Guía para comprar Reflectores LED High Bay', description: 'El aumento de los costos de electricidad y el impacto negativo de las emisiones de gases...'},
  { src: '/assets/articulo_3.jpg', alt: '', title: 'Importancia de los interruptores de parada de emergencia', description: 'Un mal funcionamiento en una faja transportadora donde se mueve material pesado...'}
]

export default function Articulos() {
  return (
    <>
      <div className={styles.articles}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p>Nuestros artículos</p>
          </div>
          <div className={styles.content}>
            {articulos.map((articulo, index) => {
              return (
                <Articulo
                  src={articulo.src}
                  alt={articulo.alt}
                  title={articulo.title}
                  description={articulo.description}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
};