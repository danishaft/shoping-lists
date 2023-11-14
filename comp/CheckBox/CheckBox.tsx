import { memo } from "react";
import styles from './index.module.scss';
import { Item } from "@/utils/interfaces";

interface CheckBoxProps{
    item: Item;
    isChecked: boolean;
    handleChange: () => void;
    saveList: boolean;
}
export const CheckBox: React.FC<CheckBoxProps> = memo(function CheckBox(props){
    const {handleChange, isChecked, item, saveList} = props
    const checkboxId = `${item.id}`
    return(
        <label className={styles.checkboxContainer} htmlFor={checkboxId}>
            {saveList && <input name={checkboxId} id={checkboxId} type="checkbox" checked={isChecked} onChange={handleChange} />}
            {isChecked ? <del><p>{item.name}</p></del> : <p>{item.name}</p>}
        </label>
    )
})
 