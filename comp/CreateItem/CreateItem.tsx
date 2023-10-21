'use client'
import { useState, ChangeEvent } from 'react'
import { Button } from '..'
import styles from './CreateItem.module.scss'

interface Input {
  name: string;
  note: string;
  image: string;
  category: string;
}
export const CreateItem = () => {
  const initialInput: Input = {
    name: '',
    note: '',
    image: '',
    category: '',
  };
  const [inputVal, setInputVal] = useState<Input>(initialInput)
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setInputVal({
      ...inputVal,
      [name]: value
    })
  }
  return (
    <section className={styles.createItem_sec}>
      <div className={styles.cont}>
        <h2>Add a new item</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input value={inputVal?.name} onChange={handleChange} className={styles.input} type="text" name='name' placeholder='Enter a name' />

          <label htmlFor="note">Note(optional)</label>
          <textarea value={inputVal?.note} onChange={handleChange} className={styles.input} name='note' placeholder='Enter a note' />

          <label htmlFor='image'>Image(optional)</label>
          <input value={inputVal?.image} onChange={handleChange} className={styles.input} type='text' name='image' placeholder='Enter a url'/>

          <label htmlFor='category'>Category</label>
          <input value={inputVal?.category} onChange={handleChange} className={styles.input} type='text' name='category' placeholder='Enter a category'/>
        </form>
      </div>
      <div className={styles.bottom}>
        <Button text='cancel' bg='#fff' color='#000'/>
        <Button text='Save' bg='#F9A109' color='#fff'/>
      </div>
    </section>
  )
}

