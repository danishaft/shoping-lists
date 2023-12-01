import { Item } from "@/utils/interfaces";
import { memo } from "react";

export const HistoryItemCard: React.FC<{item: Item}> = memo(function HistoryItemCard({item}){
    const {name, quantity} = item
    return(
        <div>
            <p>{name}</p>
            <p>{quantity}</p>
        </div>
    )
})
