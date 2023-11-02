'use client'
import { useSelector } from 'react-redux'
import type { RootState } from "@/lib/redux/store/store"
import {CreatedItemPage, ShoppingList, CreateItem} from "@/comp"

export interface ListItem {
  name: string;
  count: number;
}

export const Cart = () => {
  const toggleState = useSelector((state: RootState) => state.toggler.value)
  const activePage = useSelector((state: RootState) => state.activeSideBarPage.value)
  return toggleState ? (
    <>
        {activePage === 'EditPage' && <ShoppingList/>}
        {activePage === 'CreateNewItemPage' && <CreateItem/>}
        {activePage === 'CreatedItemPage' && <CreatedItemPage/>}
    </>
  ) : <div></div>
}
