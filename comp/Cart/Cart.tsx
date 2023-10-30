'use client'
import styles from './Cart.module.scss'
import { useSelector } from 'react-redux'
import type { RootState } from "@/lib/redux/store/store"
import {ShoppingList} from "@/comp"
import { CreateItem } from '@/comp';

export interface ListItem {
  name: string;
  count: number;
}

export const Cart = () => {
  const toggleState = useSelector((state: RootState) => state.toggler.value)
  const activePage = useSelector((state: RootState) => state.activeSideBarPage.value)
  return toggleState ? (
    <>
        {activePage === 'CreateNewItemPage' && <CreateItem/>}
        {activePage === 'EditPage' && <ShoppingList/>}
    </>
  ) : <div></div>
}
