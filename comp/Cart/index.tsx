import Card from "../Card"
import ListCategory from "../ListCategory"
import ListName from "../ListName"
import styles from './index.module.scss'
import { useSelector } from 'react-redux'
import type { RootState } from "@/lib/redux/store/store"

const Cart = () => {
  const toggleState = useSelector((state: RootState) => state.reducer.toggler.value)
  return toggleState ? (
       <section className={styles.cart_sec}>
        <Card/>
        <ListName/>
        <ListCategory/>
      </section>
  ) : null
}

export default Cart