'use client'
import { BiSolidPencil } from 'react-icons/bi'
import styles from './ListName.module.scss'
import { memo, useState, ChangeEvent } from 'react'



const ListName: React.FC = () => {
  const [input, setInput] = useState('Shopping list')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  return (
    <div className={styles.list_name}>
      <input type="text" value={input} name='name' placeholder='Untitled' onChange={handleChange} />
      <BiSolidPencil className={styles.icon}/>
    </div>
  )
}

export default memo(ListName)
