import { useAction } from "@/lib/redux/hooks";
import { toggle } from "@/lib/redux/slice/toggler";
import { RootState } from "@/lib/redux/store/store";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import styles from './index.module.scss'
export const CartIcon = () => {
    const togglerState = useSelector((state: RootState) => state.toggler.value) 
    const dispatch = useAction(toggle)
  return (
    <div aria-controls="cart" aria-expanded="false" aria-roledescription="cart btn" className={styles.cart_Icon} onClick={()=> dispatch(!togglerState)}>
        <AiOutlineShoppingCart/>
    </div>
  )
}

