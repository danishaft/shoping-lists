import { MonthSection } from '@/comp'
import styles from './HistoryPage.module.scss'
export const HistoryPage = () => {
  return (
    <section className={styles.history_container}>
        <h2>Shopping history</h2>
        <MonthSection
            monthName=''
            history={[]}
        />
    </section>
  )
}

