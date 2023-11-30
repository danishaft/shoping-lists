import { MonthSectionProps } from "@/utils/interfaces";
import { memo } from "react";
import { HistoryCard } from "..";

export const MonthSection: React.FC<MonthSectionProps> = memo(function MonthSection({monthName, history}){
    console.log( history)
    return (
        <div className="">
            <h3>{ monthName }</h3>
            {history.map((item, index) => (
                <HistoryCard
                    key={index}
                    historyItem={item}
                />
            ))}
        </div>
    )
})