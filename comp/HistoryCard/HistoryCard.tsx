import { History } from "@/utils/interfaces"
import { memo } from "react"
import styles from './HistoryCard.module.scss'
import { capitalizeText } from "@/hooks/useCapitalize"
import { MdDateRange } from "react-icons/md"
import { FaChevronRight } from "react-icons/fa6";

const formateDate = (inputDate: string): string => {
  const formattedDate = inputDate.replace(/,/g, '').replace(/\//g, '.');
  return formattedDate
}

export const HistoryCard: React.FC<{historyItem: History}> = memo(function HistoryCard({historyItem}){
  return (
    <div className={styles.history_card}>
        <p className={styles.name}>{capitalizeText(historyItem.name)}</p>
        <div className={styles.history_date}>
            <MdDateRange className={styles.icon}/>
            <p>{formateDate(historyItem.date)}</p>
        </div>
        <span className={styles.status}>
            {historyItem.status}
        </span>
          <FaChevronRight  className={styles.chevron}/>
    </div>
  )
})
