import { MonthSectionProps } from "@/utils/interfaces";
import { memo } from "react";
import { HistoryCard } from "..";
import styles from './MonthSection.module.scss'

export const MonthSection: React.FC<MonthSectionProps> = memo(function MonthSection({monthName, history}){
    
    return (
        <div className={styles.month_sec}>
            <h3>{ monthName }</h3>
            <div className={styles.list}>
                {history.map((item, index) => (
                    <HistoryCard
                        key={index}
                        historyItem={item}
                    />
                ))}
            </div>
        </div>
    )
})