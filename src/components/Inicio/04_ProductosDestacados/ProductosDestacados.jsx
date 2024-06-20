import ProductoDestacado from './ProductoDestacado';
import styles from './ProductosDestacados.module.css'

const productosDestacados = [
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tiras LED IP68', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tiras LED IP68', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tiras LED IP68', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tiras LED IP68', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'}
]

export default function ProductosDestacados() {
  return (
    <>
      <div className={styles.featuredProducts}>
        <div className={styles.container}>
          <div className={styles.title}>
            <p>Productos Destacados</p>
          </div>
          <div className={styles.content}>
            {productosDestacados.map((productoDestacado, index) => {
              return (
                <ProductoDestacado
                  src={productoDestacado.src}
                  alt={productoDestacado.alt}
                  srcFondo={productoDestacado.srcFondo}
                  brand={productoDestacado.brand}
                  name={productoDestacado.name}
                  description={productoDestacado.description}
                  certifications={productoDestacado.certifications}
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