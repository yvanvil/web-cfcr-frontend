import Testimonio from './Testimonio';
import styles from './Testimonios.module.css'

const testimonios = [
  { description: '“Corporación FCR me ha ayudado en la entrega rápida y segura en iluminación LED de calidad. Sus productos cumplen totalmente lo que indican.”', name: 'Anderson Castro | Compras en Volcan'},
  { description: '“Corporación FCR me ha ayudado en la entrega rápida y segura en iluminación LED de calidad. Sus productos cumplen totalmente lo que indican.”', name: 'Anderson Castro | Compras en Volcan'}
]

export default function Testimonios() {
  return (
    <>
      <div className={styles.testimonies}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p className={styles.title1}>Clientes satisfechos</p>
            <p className={styles.title2}>Testimonios</p>
          </div>
          <div className={styles.content}>
            {testimonios.map((testimonio, index) => {
              return (
                <Testimonio
                  description={testimonio.description}
                  name={testimonio.name}
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