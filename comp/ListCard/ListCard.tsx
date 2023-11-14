'use client'
import styles from './ListCard.module.scss'
import { memo, useState } from 'react';
import { Item } from '@/utils/interfaces';
import { useAction } from '@/lib/redux/hooks';
import { deleteFromList, editListItem } from '@/lib/redux/slice/shopingList';
import useToast from '@/hooks/useToast';
import { CheckBox, QuantityActionBtn } from '..';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store/store';

const ListCard = ({item}: {item: Item}) => {
  const [status, setStatus] = useState(() => false)
  const [isChecked, setChecked] = useState(() => false);

  const saveList = useSelector((state: RootState) => state.shoppingList.saveList)

  const dispatchDelete = useAction(deleteFromList)
  const dispatchEdit = useAction(editListItem)
  const {showSuccessToast} = useToast()

  const handleOnChange = () => {
    setChecked(!isChecked)
  }

  const onDecrease = () => {
    if(item.quantity > 0) dispatchEdit({ ...item, quantity: item.quantity - 1 })
  }

  const onIncrease = () => {
    dispatchEdit({ ...item, quantity: item.quantity + 1 })
  }

  const onHover = () => {
    setStatus(true)
  }

  const onLeave = () => {
    setStatus(false)
  }

  const handleDelete = () => {
    dispatchDelete(item);
    showSuccessToast(`${item.name} has been deleted`)
  }

  
  return (
    <div className={styles.list_card}>
      <CheckBox
        item={item}
        isChecked={isChecked}
        handleChange={handleOnChange}
        saveList={saveList}
      />
      <QuantityActionBtn
        quantity={item.quantity}
        status={status}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        onHover={onHover}
        handleDelete={handleDelete}
        onLeave={onLeave}
        saveList={saveList}
      />
    </div>
  )
}
export default memo(ListCard)

