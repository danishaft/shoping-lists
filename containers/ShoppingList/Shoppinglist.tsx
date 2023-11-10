'use client'
import { useSelector } from "react-redux"
import ListCategory from "@/comp/ListCategory/ListCategory"
import Card from "@/comp/Card/Card"
import styles from './ShoppingList.module.scss'
import { RootState } from "@/lib/redux/store/store"
import ListName from "@/comp/ListName/ListName"

export const ShoppingList = () => {
  const list = useSelector((state: RootState) => state.shoppingList.list)
  //extract unique categories using Set and map
  const categorySet = new Set(list.map(item => item.category)) 
  // convert the Set to an array
  const categoryList = Array.from(categorySet)

  return (
    <section className={styles.cart_sec}>
        <div className={styles.cont}>
            <Card/>
            <ListName/>
            {categoryList.map((category, index) => <ListCategory key={index} category={category}/>)}
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
