
import { useSelector } from "react-redux"
import ListCategory from "@/comp/ListCategory/ListCategory"
import Card from "@/comp/Card/Card"
import styles from './ShoppingList.module.scss'
import { RootState } from "@/lib/redux/store/store"
import ListName from "@/comp/ListName/ListName"
import { ChangeEvent, FormEvent, memo, useState } from "react"
import { Button, ShoppingListBtm } from "@/comp"
import { useAction } from "@/lib/redux/hooks"
import { cancelList, clearList, saveList } from "@/lib/redux/slice/shopingList"
import { saveToHistoryList } from "@/lib/redux/slice/history"
import { ListModal } from "@/comp/ListModal/ListModal"
import { formatDate } from "@/utils/formatDate"
import { v4 as uuidv4 } from 'uuid';


const ShoppingList: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('')
  const list = useSelector((state: RootState) => state.shoppingList.list)
  const isModalOpen = useSelector((state: RootState) => state.shoppingList.cancelList)
  const saveListStatus = useSelector((state: RootState) => state.shoppingList.saveList)
  const dispatchSaveStatus = useAction(saveList)
  const dispatchSaveToHistory = useAction(saveToHistoryList)
  const dispatchClearList = useAction(clearList)
  const dispatchOpenModal = useAction(cancelList)
  const categorySet = new Set(list.map(item => item.category)) 
  const categoryList = Array.from(categorySet)
  const formattedDate: string = formatDate(new Date());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setInputVal(value)
  };
  // Handle form submission
  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchSaveStatus();
  };
  const handleComplete = () => {
    dispatchClearList()
    dispatchSaveToHistory({id: uuidv4(), name: inputVal, shoppingList: list, date: formattedDate, status: "completed"})
    setInputVal('')
  }
  //
  const toggleModal = () => {
    dispatchOpenModal()
  }
  const clearShoppingList = () => {
    dispatchClearList()
    dispatchOpenModal()
    setInputVal('')
  }

  return (
    <section className={styles.cart_sec}>
        <div className={styles.cont}>
            <Card/>
            <ListName/>
            <div className={styles.list_container}>
              {categoryList.map((category, index) => <ListCategory key={index} category={category} data={list}/>)}
            </div>
        </div>
        <ListModal
          isModalOpen={isModalOpen}
          cancelList={clearShoppingList}
          closeModal={toggleModal}
        />
        <ShoppingListBtm
          handleChange={handleChange}
          handleSave={handleSave}
          handleComplete={handleComplete}
          inputVal={inputVal}
          saveList={saveListStatus}
          openModal={() => dispatchOpenModal()}
        />
      </section>
  )
}

export default memo(ShoppingList)
