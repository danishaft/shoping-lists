import Image from 'next/image'
import styles from './index.module.scss'
import source from '../../public/assests/source.svg'
const Card = () => {
  return (
    <div className={styles.card}>
      <span className={styles.img}>
        <Image
          src={source}
          alt='source image'
        />
      </span>
      <span className={styles.text}>
        <p>Didnt find what you need?</p>
        <button className={styles['btn']}>Add item</button> 
      </span>
    </div>
  )
}

export default Card