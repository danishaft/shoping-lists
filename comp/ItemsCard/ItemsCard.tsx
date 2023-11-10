import { AiOutlinePlus } from "react-icons/ai";
import styles from './ItemsCard.module.scss'
import {toggle} from '../../lib/redux/slice/toggler'
import {addToList} from '../../lib/redux/slice/shopingList'
import { memo, useCallback } from "react";
import { Item } from "@/utils/interfaces";
import { capitalizeText } from "@/hooks/useCapitalize";
import { useAction } from "@/lib/redux/hooks";

export const ItemsCard = memo(function ItemsCard({item}: {item: Item}) {
   const toggleDispatch = useAction(toggle)
   const addDispatch = useAction(addToList)
   const addItem = useCallback(() => {
    toggleDispatch(true);
    addDispatch(item)
  }, [toggleDispatch, addDispatch, item]);

  return (
    <span role="article" className={styles.item_card}>
      <p>{capitalizeText(item.name)}</p>
      <button role="button" className={styles.btn} onClick={addItem}><AiOutlinePlus className={styles.icon}/></button>
    </span>
  )
});
