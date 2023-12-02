
import { StatsItem } from "@/utils/interfaces";
import { memo } from "react";
import styles from './TopItems.module.scss'
import { ProgressBar } from "..";

export const TopItems: React.FC<{topItemsList: StatsItem[]}> = memo(function TopItems({topItemsList}){
  return(
    <div className={styles.top_items}>
      <h2>Top Items</h2>
      {
        topItemsList?.map((item, index) => (
          <ProgressBar key={index} bgcolor="#F9A109" percentage={item.percentage} title={item.name} />
        ))
      }
    </div>
  )
})
