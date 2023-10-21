import { useDispatch } from 'react-redux'
import { switchSideBarPage } from '@/lib/redux/slice/sidebarFlow'
import Image from 'next/image'
import styles from './Card.module.scss'
import source from '../../public/assests/source.svg'
export const Card = () => {
  const dispatch = useDispatch()
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
        <button className={styles['btn']} onClick={()=>dispatch(switchSideBarPage('CreateNewItemPage'))}>Add item</button> 
      </span>
    </div>
  )
}