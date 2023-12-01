import { Item } from "@/utils/interfaces";
import { memo } from "react";
import styles from './HistoryCategory.module.scss'
import { HistoryItemCard } from "..";
import { capitalizeText } from "@/hooks/useCapitalize";

export const HistoryCategory: React.FC<{items: Item[], categoryName: string}> = memo(function HistoryCategory({items, categoryName}){
    return(
        <div className={styles.history_category}>
            <h3>{capitalizeText(categoryName)}</h3>
            <div className={styles.list}>
                {
                    items.map((item, index) => (
                        <HistoryItemCard key={index} item={item}/>
                    ))
                }
            </div>
        </div>
    )
})
