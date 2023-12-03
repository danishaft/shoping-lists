'use client'
import { useDispatch } from "react-redux";
import {switchSideBarPage as switcher} from '../../lib/redux/slice/sidebarFlow'
import { saveNewItem } from "@/lib/redux/slice/Item";
import { useState, ChangeEvent } from 'react'
import { Button, Options } from '../../comp'
import styles from './CreateItem.module.scss'
import { Item } from '@/utils/interfaces'
import { v4 as uuidv4 } from 'uuid';
7


const initialInput: Item = {
  id: uuidv4(),
  name: '',
  note: '',
  image: '',
  category: '',
  quantity: 0,
  completed: false,
  date: new Date()
};

export const CreateItem = () => {
  const dispatch = useDispatch()
  const [inputVal, setInputVal] = useState<Item>(initialInput)
  const [dropdown, setDropdown] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  

  //handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setInputVal({
      ...inputVal,
      [name]: value.toLowerCase()
    })
  }

  // set active options
  const handleDropdown = (e: any) => {
    const {textContent} = e.target
    const category = textContent.toLowerCase()
    setActive(category)
    setInputVal(prev => (
      {...prev, category: category}
    ))
  }
  
  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault(); 
    dispatch(saveNewItem(inputVal))
    console.log(inputVal)
    dispatch(switcher('CreatedItemPage'))
  };

  return (
    <section className={styles.createItem_sec}>
      <form id={styles.formik}  name="myForm" onSubmit={handleSubmit}> 
        <div className={styles.cont}>
          <h2>Add a new item</h2>
            <label htmlFor="name">Name</label>
            <input value={inputVal?.name} onChange={handleChange} className={styles.input} type="text" name='name' placeholder='Enter a name' required autoComplete="on"/>

            <label htmlFor="note">Note(optional)</label>
            <textarea value={inputVal?.note} onChange={handleChange} className={styles.input} name='note' placeholder='Enter a note' autoComplete="on"/>

            <label htmlFor='image'>Image(optional)</label>
            <input value={inputVal?.image} onChange={handleChange} className={styles.input} type='text' name='image' placeholder='Enter a url' disabled/>

            <label htmlFor='category'>Category</label>
            <input value={inputVal?.category} onChange={handleChange} onClick={()=>setDropdown(prev => !prev)} className={styles.input} type='text' name='category' placeholder='Enter a category' required autoComplete="on"/>
            {dropdown &&
                <Options handleDropdown={handleDropdown} active={active}/>
            }
        </div>
        <div className={styles.bottom}>
          <Button onClick={()=> dispatch(switcher('EditPage'))} text='cancel' bg='#fff' color='#000'/>
          <Button type='submit' text='Save' bg='#F9A109' color='#fff'/>
        </div>
      </form>
    </section>
  )
}

