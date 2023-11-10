
import ListCard from '../ListCard/ListCard';
import styles from './ListCard.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store/store";
import { memo, useMemo } from "react";
import { Item } from "@/utils/interfaces";
import { capitalizeText } from "@/hooks/useCapitalize";

interface ListCategoryProps{
  category: string;
}

const ListCategory: React.FC<ListCategoryProps> = (props) => {
  const {category} = props
  const listItems = useSelector((state: RootState) => state.shoppingList.list)
  //create a new map
  const uniqueList = new Map() 
  // add only item based on id to map
    listItems.forEach(item => {
      uniqueList.set(item.id, item)
    })
  //convert map back to an array
    const listItemsArr = Array.from(uniqueList.values())

  function filterItems(items: Item[], category: string){
    return items.filter(item=> capitalizeText(item.category) === capitalizeText(category))
  }
  const filteredItem = useMemo(()=>
    filterItems(listItemsArr, category)
  , [listItemsArr, category])

  return (
    <div className={styles.list_category}>
        <h2>{category}</h2>
        {filteredItem.map(item => <ListCard key={item.id} item={item}/>)}
    </div>
  )
}

export default memo(ListCategory)
