'use client'
import { Chart, TopCategory, TopItems } from '@/comp'
import styles from './StatsPage.module.scss'
import { useSelector } from "react-redux"
import { calcTopItemsAndCategory } from '@/utils/calcTopItemAndCategories'
import { RootState } from '@/lib/redux/store/store'

export const StatsPage = () => {
  const historyList = useSelector((state: RootState) => state.historyList.historyList)
  const topItemAndCategoryList = calcTopItemsAndCategory(historyList)
  console.log(topItemAndCategoryList)
  return (
    <section className={styles.statsPage_sec}>
      <div className={styles.allProgress_sec}>
        <TopItems topItemsList={topItemAndCategoryList.topItems}/>
        <TopCategory topCategoriesList={topItemAndCategoryList.topCategories}/>
      </div>
      <Chart data={topItemAndCategoryList.topHistoricalMonthData}/>
    </section>
  )
}
