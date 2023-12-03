import { ChangeEvent, FormEvent, memo, } from 'react'
import styles from './index.module.scss'
import { Button } from '..'

interface ShoppingListBtmProps{
    handleSave: (e: FormEvent<HTMLFormElement>) => void,
    handleComplete: () => void,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    inputVal: string,
    saveList: boolean,
    openModal: () => void
}
const MIN_INPUT_LENGTH = 3;
export const ShoppingListBtm: React.FC<ShoppingListBtmProps> = memo( function ShoppingListBtm(props) {
    const {inputVal, handleChange, saveList, handleComplete, handleSave, openModal} = props
    const bg = inputVal.length > MIN_INPUT_LENGTH ? "#F9A109" : '#C1C1C4'
    const isDisabled = inputVal.length <= MIN_INPUT_LENGTH
  return (
    <div className={styles.bottom}>
        <form onSubmit={handleSave}>
            {
                !saveList &&
                <div className={`${styles.input_container} ${inputVal.length > MIN_INPUT_LENGTH && `${styles.name_field_active}`}`}>
                    <input value={inputVal} type="text" placeholder="Enter a name" onChange={handleChange}/>
                    <Button bg={bg} type="submit" text="Save" isDisabled={isDisabled}/>
                </div>
            }
            {
                saveList &&
                <div className={styles.complete_btn}>
                    <Button type='button' onClick={openModal} text='cancel' bg='#fff' color='#000'/>
                    <Button type='button' onClick={handleComplete} text='Complete' bg='#56CCF2' color='#fff'/>
                </div>
            }
        </form>
    </div>
  )
})
