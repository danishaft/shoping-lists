
import ListCard from '../ListCard/ListCard';
import styles from './ListCard.module.scss'
import { memo, useMemo } from "react";
import { Item } from "@/utils/interfaces";
import { filterItems } from '@/hooks/useFilterItems';

interface ListCategoryProps{
  category: string;
  data: Item[]
}

const ListCategory: React.FC<ListCategoryProps> = (props) => {
  const {category, data} = props
  
  const filteredItem = useMemo(()=>
    filterItems(data, category)
  , [data, category])

  return (
    <div className={styles.list_category}>
        <h2>{category}</h2>
        {filteredItem.map(item => <ListCard key={item.id} item={item}/>)}
    </div>
  )
}

export default memo(ListCategory)
