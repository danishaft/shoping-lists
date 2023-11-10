'use client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './ListCard.module.scss'
import { MdDeleteOutline } from "react-icons/md";
import { memo, useState } from 'react';
import { Item } from '@/utils/interfaces';
import { useAction } from '@/lib/redux/hooks';
import { deleteFromList, editListItem } from '@/lib/redux/slice/shopingList';
const ListCard = ({item}: {item: Item}) => {
  const [status, setStatus] = useState(() => false)
  const dispatchDelete = useAction(deleteFromList)
  const dispatchEdit = useAction(editListItem)

  const increaseItem = () => {
    dispatchEdit({ ...item, quantity: item.quantity + 1 });
    setStatus(!status)
  }
  const decreaseItem = () => {
    if (item.quantity > 0){
      dispatchEdit({ ...item, quantity: item.quantity - 1 })
      setStatus(!status)
    } 
  }
  return (
    <div className={styles.list_card}>
      <p>{item.name}</p>

      {
        !status &&
        <div aria-roledescription='item count' className={`${styles.countSec_open} ${styles.brown}`}>
          <span className={styles.count_logic}>
            <button aria-controls='item-actions' onClick={() => {setStatus(prev => !prev)}} className={styles.count}>
              {`${item.quantity} pcs`}
            </button>
          </span>
        </div>
      }

      {
        status &&
        <div id='item-actions' className={styles.countSec_open}>
          <span className={styles.delete} aria-roledescription='delete item button' onClick={() => dispatchDelete(item)}>
            <MdDeleteOutline/>
          </span>
          <span className={styles.count_logic}>
            <AiOutlineMinus className={styles.action_btn} aria-roledescription='minus item button' onClick={decreaseItem}/>
            <button aria-controls='item-actions' onClick={() => {setStatus(prev => !prev)}} className={styles.count}>
              {`${item.quantity} pcs`}
            </button>
            <AiOutlinePlus className={styles.action_btn} style={{marginRight: '.2em'}} onClick={increaseItem}/>
          </span>
        </div>
      }

    </div>
  )
}
export default memo(ListCard)

