'use client'
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/redux/store/store";
import { AiOutlineSearch } from "react-icons/ai"
import styles from './Items.module.scss'
import { ItemsCategory } from "@/comp";
import { categorySet } from "@/utils/categorySet";
import { filterByCategory } from "@/utils/filterByCategory";


export const Items = () => {
  //connecting to redux store
  const itemList = useSelector((state:RootState) => state.Items.value);
  const categoryList = categorySet(itemList)
  
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
            <ItemsCategory key={index} title={category} items={filterByCategory(itemList, category)}/>
          ))}
        </div>
    </section>
  )
}
