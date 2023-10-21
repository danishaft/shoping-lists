import {ItemsCard} from "@/comp"
import styles from './ItemsCategory.module.scss'
export const ItemsCategory = ({title}: {title: string}) => {
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
