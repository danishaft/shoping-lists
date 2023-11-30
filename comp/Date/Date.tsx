import { memo } from "react";
import { MdDateRange } from "react-icons/md"
import styles from './Date.module.scss'


export const Date: React.FC<{date: string}> = memo(function Date({date}){
    return (
        <div className={styles.history_date}>
            <MdDateRange className={styles.icon}/>
            <p>{date}</p>
        </div>
    )
})
