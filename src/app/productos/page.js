import Product from "@/components/Product/Product";

const productos = [
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
  { src: '/assets/destacado_producto_1.png', alt: '', srcFondo: '/assets/destacado_fondo_1.jpg', brand: 'Leomay', name: 'Tira LED 10W/m', code: 'IL060301', description: '10W/m, > 3200 lm/m, SMD 2835, Epistar, 85-265 VAC, PVC, IP68 Anti-UV, 120°, >50,000 horas', certifications: 'CE, FCC, ISO9001, RoHS, UL'},
]

export default function Productos() {
  return (
    <>
      {productos.map((producto, index) => {
        return (
          <>
            <Product
              src={producto.src}
              alt={producto.alt}
              srcFondo={producto.srcFondo}
              brand={producto.brand}
              name={producto.name}
              code={producto.code}
              description={producto.description}
              certifications={producto.certifications}
              key={index}
            />
          </>  
        )
      })}
    </>
  );
}