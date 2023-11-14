
import { useSelector } from "react-redux"
import ListCategory from "@/comp/ListCategory/ListCategory"
import Card from "@/comp/Card/Card"
import styles from './ShoppingList.module.scss'
import { RootState } from "@/lib/redux/store/store"
import ListName from "@/comp/ListName/ListName"
import { ChangeEvent, FormEvent, memo, useState } from "react"
import { Button, ShoppingListBtm } from "@/comp"
import { useAction } from "@/lib/redux/hooks"
import { saveList } from "@/lib/redux/slice/shopingList"
import { saveToHistoryList } from "@/lib/redux/slice/history"


const ShoppingList: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('')
  const list = useSelector((state: RootState) => state.shoppingList.list)
  const saveListStatus = useSelector((state: RootState) => state.shoppingList.saveList)
  const dispatchSaveStatus = useAction(saveList)
  const dispatchSaveToHistory = useAction(saveToHistoryList)
  const categorySet = new Set(list.map(item => item.category)) 
  const categoryList = Array.from(categorySet)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setInputVal(value)
  };
  // Handle form submission
  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchSaveStatus();
    setInputVal('')
  };
  const handleComplete = () => {
    dispatchSaveStatus()
    dispatchSaveToHistory(list)
  }

  return (
    <section className={styles.cart_sec}>
        <div className={styles.cont}>
            <Card/>
            <ListName/>
            {categoryList.map((category, index) => <ListCategory key={index} category={category} data={list}/>)}
        </div>
        <ShoppingListBtm
          handleChange={handleChange}
          handleSave={handleSave}
          handleComplete={handleComplete}
          inputVal={inputVal}
          saveList={saveListStatus}
        />
      </section>
  )
}

export default memo(ShoppingList)
