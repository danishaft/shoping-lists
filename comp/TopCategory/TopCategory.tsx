import { StatsItem } from "@/utils/interfaces"
import { memo } from "react"
import styles from './TopCategory.module.scss'
import { ProgressBar } from ".."

export const TopCategory: React.FC<{topCategoriesList: StatsItem[]}> = memo(function TopCategory({topCategoriesList}){
  return(
    <div className={styles.top_categories}>
      <h2>Top Categories</h2>
      {
        topCategoriesList?.map((item, index) => (
          <ProgressBar key={index} bgcolor="#56CCF2" percentage={item.percentage} title={item.name} />
        ))
      }
    </div>
  )
})
