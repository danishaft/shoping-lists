import { AiOutlineSearch } from "react-icons/ai"
import {ItemsCategory} from "@/comp"
import styles from './Items.module.scss'
export const Items = () => {
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
          <ItemsCategory title="Fruit and vegetables"/>
          <ItemsCategory title="Meat and Fish"/>
          <ItemsCategory title="Beverages"/>
          <ItemsCategory title="Pets"/>
        </div>
    </section>
  )
}
