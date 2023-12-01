import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/lib/redux/store/store";
import {ItemsCard} from "@/comp"
import styles from './ItemsCategory.module.scss'
import { capitalizeText } from "@/hooks/useCapitalize";
import { memo, useMemo } from "react";
import { Item } from "@/utils/interfaces";

interface ItemsCategoryProps {
  title: string
  items: Item[]
}

export const ItemsCategory: React.FC<ItemsCategoryProps> = memo(function ItemsCategory({title, items}){
    
    return (
      <div className={styles.category}>
        <h2>{capitalizeText(title)}</h2>
          <div className={styles.list}>
            {items.map((item, index) => (
              <ItemsCard key={index} item={item}/>
            ))}
          </div>
      </div>
    )
  })

