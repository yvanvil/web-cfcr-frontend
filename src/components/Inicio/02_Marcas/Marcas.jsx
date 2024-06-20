import SliderContinous from '@/components/SliderContinous/SliderContinous';
import styles from './Marcas.module.css'

const marcas = [
  { src: '/assets/imagen1.png', alt: ''},
  { src: '/assets/imagen2.png', alt: ''},
  { src: '/assets/imagen3.png', alt: ''},
  { src: '/assets/imagen4.png', alt: ''},
]

export default function Marcas() {
  return (
    <>
      <div className={styles.brands}>
        <div className={styles.container}>
          <p className={styles.title}>Las mejores marcas para la optimización de tu empresa</p>
          <div className={styles.logos}>
            <SliderContinous slider={marcas}/>
          </div>
        </div>
      </div>
    </>
  )
};
