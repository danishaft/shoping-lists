import { AiOutlinePlus } from "react-icons/ai";
import styles from './ItemsCard.module.scss'
export const ItemsCard = ({text}: {text: string}) => {
  return (
    <span className={styles.item_card}>
      <p>{text}</p>
      <AiOutlinePlus/>
    </span>
  )
}
