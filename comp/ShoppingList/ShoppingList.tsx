'use client'
import { useState } from "react"
import {ListCategory, Card, ListName} from "@/comp"
import styles from './ShoppingList.module.scss'
import type { ListItem } from "../Cart/Cart"

export const ShoppingList = () => {
  const [state, setState] = useState<ListItem[]>([{name: 'Avocado', count: 1}, {name: 'Rice', count: 2}])
  const [category, setCategory] = useState<string[]>(['Fruit and vegetables', 'Fruit'])
  return (
    <section className={styles.cart_sec}>
        <div className={styles.cont}>
          <Card/>
          <ListName/>
          <ListCategory category={category[0]} data={state[0]}/>
          <ListCategory category={category[1]}  data={state[1]}/>
        </div>
        <div className={styles.bottom}>
          <div className={styles.input_container}>
            <input type="text" placeholder="Enter a name" />
            <div className={styles.btn}>
              Save
            </div>
          </div>
        </div>
      </section>
  )
}
