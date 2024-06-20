import styles from './Testimonio.module.css'

export default function Testimonio(props) {
  return (
    <>
      <div className={styles.testimony}>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.name}>{props.name}</p>
      </div>
    </>
  )
};