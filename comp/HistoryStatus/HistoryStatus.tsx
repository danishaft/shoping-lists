import { memo } from "react";
import styles from './HistoryStatus.module.scss'

export const HistoryStatus: React.FC<{status: string}> = memo(function HistoryStatus({status}){
    const colorClass = status === 'completed' ? styles.completed : styles.cancelled;
    return(
        <span className={`${styles.status} ${colorClass}`}>
            {status}
        </span>
    )
})
