import styles from './News.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

const slides = [
  { srcFondo: '/assets/slide_principal_1.jpg', altFondo: '', title: 'Ilumina ambientes de gran altura', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore', src: '/assets/reflector.png', alt: ''},
  { srcFondo: '/assets/slide_principal_1.jpg', altFondo: '', title: 'Ilumina ambientes de gran altura', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore', src: '/assets/reflector.png', alt: ''},
  { srcFondo: '/assets/slide_principal_1.jpg', altFondo: '', title: 'Ilumina ambientes de gran altura', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore', src: '/assets/reflector.png', alt: ''},
]

export default function News() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-bullet-inactive-color': '#fff',
        }}
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={styles.slider}
                style={{
                  backgroundImage: `url(${slide.srcFondo})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              >
                <div className={styles.container}>
                  <div className={styles.description}>
                    <p className={styles.title}>{slide.title}</p>
                    <p className={styles.subtitle}>{slide.description}</p>
                    <button>Cotizar producto</button>
                  </div>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={400}
                    height={400}
                    style={{zIndex: 1}}
                  />
                  <div className={styles.block}></div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* <div
        className={styles.slider}
        style={{
          backgroundImage: `url(${fondo1.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className={styles.container}>
          <div className={styles.description}>
            <p className={styles.title}>Ilumina ambientes de gran altura</p>
            <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
            <button>Cotizar producto</button>
          </div>
          <Image
            src={'/assets/reflector.png'}
            alt='slider-image1'
            width={400}
            height={400}
            style={{zIndex: 1}}
          />
          <div className={styles.block}></div>
        </div>
      </div> */}
    </>
  )
};