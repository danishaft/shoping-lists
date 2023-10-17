import ItemsCard from "../ItemsCard"
import styles from './index.module.scss'
const ItemsCategory = ({title}: {title: string}) => {
  return (
    <div className={styles.category}>
      <h2>{title}</h2>
        <div className={styles.list}>
          <ItemsCard text="Avocado"/>
          <ItemsCard text="Appa"/>
        </div>
    </div>
  )
}

export default ItemsCategory