import { History } from "@/utils/interfaces"
import { memo, useCallback } from "react"
import styles from './HistoryCard.module.scss'
import { capitalizeText } from "@/hooks/useCapitalize"
import { FaChevronRight } from "react-icons/fa6";
import { Date, HistoryStatus } from ".."
import Link from "next/link";


export const HistoryCard: React.FC<{historyItem: History}> = memo(function HistoryCard({historyItem}){

  const formatDate = historyItem.date.replace(/,/g, '').replace(/\//g, '.');
  return (
    <div className={styles.history_card}>
        <p className={styles.name}>{capitalizeText(historyItem.name)}</p>
        <Date date={formatDate}/>
        <HistoryStatus status={historyItem.status}/>
        <Link href={`/history/${historyItem.id}`}><FaChevronRight  className={styles.chevron}/></Link>
    </div>
  )
})
