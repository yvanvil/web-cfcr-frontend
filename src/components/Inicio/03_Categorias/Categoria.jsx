import styles from './Categoria.module.css'

export default function Categoria(props) {
  return (
    <>
      <div
        className={styles.category}
        style={{
          width: props.width,
          height: props.height,
          backgroundImage: `url(${props.srcFondo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <p className={styles.title}>{props.name}</p>
      </div>
    </>
  )
};