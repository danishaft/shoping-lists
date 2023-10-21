import { ListItem } from "../Cart/Cart";
import {ListCard} from "@/comp"
import styles from './ListCard.module.scss'

export const ListCategory = (props: {category: string; data: ListItem}) => {
  const {category, data} = props
  return (
    <div className={styles.list_category}>
        <h2>{category}</h2>
        <ListCard count={data.count} name={data.name}/>
    </div>
  )
}
