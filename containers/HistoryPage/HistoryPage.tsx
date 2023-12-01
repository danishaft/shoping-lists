'use client'
import { MonthSection } from '@/comp'
import styles from './HistoryPage.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store/store'
import { arrangeHistoryByMonth } from '@/utils/arrangeHistoryByMonth'
import { useEffect } from 'react'

export const HistoryPage = () => {
  const historyList = useSelector((state: RootState)=> state.historyList.historyList)
  const arrangedHistory = arrangeHistoryByMonth(historyList);

  return (
    <section className={styles.history_container}>
        <h2>Shopping history</h2>
        {Object.keys(arrangedHistory).map((monthYear, index) => (
          <MonthSection
          key={index}
          monthName={monthYear}
          history={arrangedHistory[monthYear]}
          />
        ))}
    </section>
  )
}

