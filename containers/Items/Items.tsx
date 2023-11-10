'use client'
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/redux/store/store";
import { AiOutlineSearch } from "react-icons/ai"
import ItemsCategory from "@/comp/ItemsCategory/ItemsCategory";
import styles from './Items.module.scss'


export const Items = () => {
  //connecting to redux store
  const itemList = useSelector((state:RootState) => state.Items.value);
  //extract unique categories using Set and map
  const categorySet = new Set(itemList.map(item => item.category)) 
  // convert the Set to an array
  const categoryList = Array.from(categorySet)
  
  return (
    <section className={styles.item_sec}>
        <div className={styles.item_top}>
          <h1><span>Shoppingify</span> allows you take your shopping list wherever you go</h1>
          <div className={styles.search}>
            <form>
              <input type="text" placeholder="Search item" className={styles.input} />
            </form>
            <AiOutlineSearch className={styles.icon}/>
          </div>
        </div>
        <div className={styles.item_main}>
          {categoryList.map((category, index)=>(
            <ItemsCategory key={index} title={category}/>
          ))}
        </div>
    </section>
  )
}
