import { AiOutlinePlus } from "react-icons/ai";
import styles from './ItemsCard.module.scss'
import { useDispatch } from "react-redux";
import {toggle} from '../../lib/redux/slice/toggler'
import {addToList} from '../../lib/redux/slice/shopingList'
import { memo, useCallback } from "react";
import { Item } from "@/utils/interfaces";
import { capitalizeText } from "@/hooks/useCapitalize";
export const ItemsCard = memo(function ItemsCard({item}: {item: Item}) {
   const dispatch = useDispatch()
   const addItem = useCallback(() => {
    dispatch(toggle(true));
    dispatch(addToList(item))
  }, [dispatch, item]);

  return (
    <span role="article" className={styles.item_card}>
      <p>{capitalizeText(item.name)}</p>
      <button role="button" className={styles.btn} onClick={addItem}><AiOutlinePlus className={styles.icon}/></button>
    </span>
  )
});
