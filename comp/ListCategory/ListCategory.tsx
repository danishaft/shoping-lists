
import {ListCard} from "@/comp"
import styles from './ListCard.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store/store";
import { useMemo } from "react";
import { Item } from "@/utils/interfaces";
import { capitalizeText } from "@/hooks/useCapitalize";

export const ListCategory = (props: {category: string;}) => {
  const {category} = props
  const listItems = useSelector((state: RootState) => state.shoppingList.list)
  function filterItems(items: Item[], category: string){
    return items.filter(item=> capitalizeText(item.category) === capitalizeText(category))
  }
  const filteredItem = useMemo(()=>
    filterItems(listItems, category)
  , [listItems, category])

  return (
    <div className={styles.list_category}>
        <h2>{category}</h2>
        {filteredItem.map(item => <ListCard key={item.id} item={item}/>)}
    </div>
  )
}
