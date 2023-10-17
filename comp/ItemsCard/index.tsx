import { AiOutlinePlus } from "react-icons/ai";
import styles from './index.module.scss'
const ItemsCard = ({text}: {text: string}) => {
  return (
    <span className={styles.item_card}>
      <p>{text}</p>
      <AiOutlinePlus/>
    </span>
  )
}

export default ItemsCard