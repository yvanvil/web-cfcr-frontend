import Catalogo from './Catalogo';
import styles from './Catalogos.module.css'

const catalogos = [
  { name: 'Iluminación LED', src: '/assets/catalogo_1.jpg', alt: ''},
  { name: 'Equipos para Fajas Transportadoras', src: '/assets/catalogo_2.jpg', alt: ''},
  { name: 'Instrumentación', src: '/assets/catalogo_3.jpg', alt: ''}
]

export default function Catalogos() {
  return (
    <>
      <div className={styles.catalogues}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p>Nuestros catálogos digitales</p>
          </div>
          <div className={styles.content}>
            {catalogos.map((catalogo, index) => {
              return (
                <Catalogo
                  name={catalogo.name}
                  src={catalogo.src}
                  alt={catalogo.alt}
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