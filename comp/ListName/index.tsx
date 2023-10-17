import { BiSolidPencil } from 'react-icons/bi'
import styles from './index.module.scss'
import { useState } from 'react'
const ListName = () => {
  const [input, setInput] = useState('Shopping list')
  const handleChange = (e: any) => {
    setInput(e.target.value)
  }
  return (
    <div className={styles.list_name}>
      <input type="text" value={input} name='name' onChange={handleChange} />
      <BiSolidPencil/>
    </div>
  )
}

export default ListName