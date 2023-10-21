'use client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './ListCard.module.scss'
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
export const ListCard = ({name, count}: {name: string, count: number}) => {
  const [status, setStatus] = useState(() => false)
  return (
    <div className={styles.list_card}>
      <p>{name}</p>

      {
        !status &&
        <button onClick={() => {setStatus(prev => !prev)}} className={styles.count}>
          {`${count} pcs`}
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
              {`${count} pcs`}
            </button>
            <AiOutlinePlus/>
          </span>
        </div>
      }

    </div>
  )
}

