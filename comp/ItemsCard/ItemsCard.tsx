import { AiOutlinePlus } from "react-icons/ai";
import styles from './ItemsCard.module.scss'
export const ItemsCard = ({text}: {text: string}) => {
  function addItem (){
    console.log('clicked')
  }
  return (
    <span className={styles.item_card}>
      <p>{text}</p>
      {/* <button type="button" onClick={addItem}>n</button> */}
      <AiOutlinePlus className={styles.icon}/>
    </span>
  )
}
