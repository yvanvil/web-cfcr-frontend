import SliderContinous from '@/components/SliderContinous/SliderContinous';
import styles from './Clientes.module.css'

const clientes = [
  { src: '/assets/imagen1.png', alt: ''},
  { src: '/assets/imagen2.png', alt: ''},
  { src: '/assets/imagen3.png', alt: ''},
  { src: '/assets/imagen4.png', alt: ''}
]

export default function Clientes() {
  return (
    <>
      <div className={styles.clients}>
        <div className={styles.container}>
          <p className={styles.title}>Nuestros clientes respaldan nuestro compromiso</p>
          <div className={styles.logos}>
            <SliderContinous slider={clientes}/>
          </div>
        </div>
      </div>
    </>
  )
};