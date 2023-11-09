'use client'
import { useSelector } from 'react-redux'
import type { RootState } from "@/lib/redux/store/store"
import {CreatedItemPage, ShoppingList, CreateItem} from "@/containers"
import styles from './Cart.module.scss'

export interface ListItem {
  name: string;
  count: number;
}

export const Cart = () => {
  const toggleState = useSelector((state: RootState) => state.toggler.value)
  const activePage = useSelector((state: RootState) => state.activeSideBarPage.value)
  return (
    <aside id='cart' className={styles.aside} data-visible={`${toggleState}`}>
        {activePage === 'EditPage' && <ShoppingList/>}
        {activePage === 'CreateNewItemPage' && <CreateItem/>}
        {activePage === 'CreatedItemPage' && <CreatedItemPage/>}
    </aside>
  ) 
}
