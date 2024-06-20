import styles from './SliderContinous.module.css'
import Image from "next/image";

export default function SliderContinous(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.slider}>
          {props.slider.map((slide, index) => {
            return (
              <Image
                src={slide.src}
                alt={slide.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%'}}
                key={index}
              />
            )
          })}
        </div>
        <div className={styles.slider}>
          {props.slider.map((slide, index) => {
            return (
              <Image
                src={slide.src}
                alt={slide.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%'}}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </>
  )
};