import { useSelector, useDispatch } from "react-redux";
import {toggle} from '../../lib/redux/slice/toggler'
import type {RootState} from '../../lib/redux/store/store'
import Image from "next/image"
import logo from '../../public/assests/logo.svg'
import styles from './Nav.module.scss'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";
import {NavItem} from "@/comp";
 export const Nav = () => {
  const togglerState = useSelector((state: RootState) => state.toggler.value) 
  const dispatch = useDispatch()
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="logo"
        />
      </div>
      <nav className={styles.nav_list}>
        <NavItem path="/">
          <AiOutlineUnorderedList/>
        </NavItem>
        <NavItem path="/history">
          <BsArrowCounterclockwise/>
        </NavItem>
        <NavItem path="/stats">
          <BiBarChartSquare/>
        </NavItem>
      </nav>
      <div className={styles.cart_Icon} onClick={()=> dispatch(toggle(!togglerState))}>
        <AiOutlineShoppingCart/>
      </div>
    </header>
  )
}
