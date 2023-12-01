import { Item } from "@/utils/interfaces";
import { memo } from "react";
import styles from './HistoryItemCard.module.scss'
import { capitalizeText } from "@/hooks/useCapitalize";

export const HistoryItemCard: React.FC<{item: Item}> = memo(function HistoryItemCard({item}){
    const {name, quantity} = item
    return(
        <span role="article" className={styles.item_card}>
            <p className={styles.name}>{capitalizeText(name)}</p>
            <p className={styles.quantity}>{`${quantity} pcs`}</p>
      </span>
    )
})
