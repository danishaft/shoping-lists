import Image from "next/image"
import logo from '../../public/assests/logo.svg'
import styles from './index.module.scss'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";

import NavItem from "../NavItem";
const Nav = () => {
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
      <div className={styles.cart_Icon}>
        <AiOutlineShoppingCart/>
      </div>
    </header>
  )
}

export default Nav