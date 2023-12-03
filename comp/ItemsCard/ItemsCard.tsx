'use client'
import { AiOutlinePlus } from "react-icons/ai";
import styles from './ItemsCard.module.scss'
import {toggle} from '../../lib/redux/slice/toggler'
import {addToList} from '../../lib/redux/slice/shopingList'
import { memo, useCallback} from "react";
import { Item } from "@/utils/interfaces";
import { capitalizeText } from "@/hooks/useCapitalize";
import { useAction } from "@/lib/redux/hooks";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store/store";

export const ItemsCard: React.FC<{item: Item}> = memo(function ItemsCard({item}: {item: Item}) {
    const shoppingList = useSelector((state: RootState) => state.shoppingList.list )
   const toggleDispatch = useAction(toggle)
   const addDispatch = useAction(addToList)

   const isItemInShoppingList = shoppingList.some((listItem) => listItem.id === item.id )

   const addItem = useCallback(() => {
    if (!isItemInShoppingList){
      addDispatch(item);
      toggleDispatch(true);
      toast.info(`${item.name} has been added to list`, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } else {
      toast.error(`${item.name} is already in the list!`, {
         position: "top-center",})
    }
  }, [toggleDispatch, addDispatch, item, isItemInShoppingList]);

  return (
    <span role="article" className={styles.item_card}>
      <p>{capitalizeText(item.name)}</p>
      <button role="button" className={styles.btn} onClick={addItem}><AiOutlinePlus onClick={addItem}/></button>
      {/* <AiOutlinePlus className={styles.icon} onClick={addItem}/> */}
    </span>
  )
});
