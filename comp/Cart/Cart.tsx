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
  const toggleState = useSelector((state: RootState) => state.reducer.toggler.value)
  const activePage = useSelector((state: RootState) => state.reducer.activeSideBarPage.value)
  return toggleState ? (
    <>
        {activePage === 'EditPage' && <ShoppingList/>}
        {activePage === 'CreateNewItemPage' && <CreateItem/>}
    </>
  ) : null
}
