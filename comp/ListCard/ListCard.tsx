'use client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './ListCard.module.scss'
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
import { Item } from '@/utils/interfaces';
export const ListCard = ({item}: {item: Item}) => {
  const [status, setStatus] = useState(() => false)
  return (
    <div className={styles.list_card}>
      <p>{item.name}</p>

      {
        !status &&
        <button onClick={() => {setStatus(prev => !prev)}} className={styles.count}>
          {`${item.quantity} pcs`}
        </button>
      }

      {
        status &&
        <div className={styles.countSec_open}>
          <span className={styles.delete}>
            <MdDeleteOutline/>
          </span>
          <span className={styles.count_logic}>
            <AiOutlineMinus/>
            <button onClick={() => {setStatus(prev => !prev)}} className={styles.count}>
              {`${item.quantity} pcs`}
            </button>
            <AiOutlinePlus/>
          </span>
        </div>
      }

    </div>
  )
}

