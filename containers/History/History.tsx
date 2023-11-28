import { MonthSection } from '@/comp'
import styles from './History.module.scss'
export const History = () => {
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

