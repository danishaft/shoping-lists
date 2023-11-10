import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/lib/redux/store/store";
import {ItemsCard} from "@/comp"
import styles from './ItemsCategory.module.scss'
import { capitalizeText } from "@/hooks/useCapitalize";
import { memo, useMemo } from "react";

interface ItemsCategoryProps {
  title: string
}

const ItemsCategory: React.FC<ItemsCategoryProps> = ({title}) => {
//redux state
  const data = useSelector((state:RootState) => state.Items.value) 
  //filter items based on category
  const filterItem = useMemo(() => data.filter(item => capitalizeText(title) === capitalizeText(item.category) ), [data, title])
  
  return (
    <div className={styles.category}>
      <h2>{capitalizeText(title)}</h2>
        <div className={styles.list}>
          {filterItem.map((item, index) => (
            <ItemsCard key={index} item={item}/>
          ))}
        </div>
    </div>
  )
}

export default memo(ItemsCategory)
