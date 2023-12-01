'use client'
import { memo } from "react";
import styles from './SingleHistoryPage.module.scss'
import { BackBtn, Date, HistoryCategory } from "@/comp";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store/store";
import { History, Item } from "@/utils/interfaces";
import { categorySet } from "@/utils/categorySet";
import { filterByCategory } from "@/utils/filterByCategory";

export const SingleHistoryPage: React.FC<{id: string}> = memo(function SingleHistoryPage({id}){
  const router = useRouter()
  const historyList: History[] = useSelector((state: RootState)=> state.historyList.historyList);
  const filteredHistory: History[] = historyList.filter((item) => item.id === id);
  const {name, date, shoppingList} = filteredHistory[0]
  const categories: string[] = categorySet(shoppingList)
  
  return(
    <section className={styles.singleHistory_container}>
      SingleHistoryPage: {id}
      <BackBtn text={'back'} onClick={() => router.back()}/>
      <h2><b>{name}</b></h2>
      <Date date={date}/>
      {
        categories.map((category, index) => (
          <HistoryCategory key={index} categoryName={category} items={filterByCategory(shoppingList, category)}/>
        ))
      }
    </section>
  )
})
