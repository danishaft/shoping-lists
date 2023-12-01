import { Item } from "@/utils/interfaces";
import { memo } from "react";
import styles from './HistoryCategory.module.scss'
import { HistoryItemCard } from "..";

export const HistoryCategory: React.FC<{items: Item[], categoryName: string}> = memo(function HistoryCategory({items, categoryName}){
    return(
        <div className={styles.history_category}>
            {categoryName}
            {
                items.map((item, index) => (
                    <HistoryItemCard key={index} item={item}/>
                ))
            }
        </div>
    )
})
