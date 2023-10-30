'use client'
import type { RootState } from "@/lib/redux/store/store";
import { useSelector} from "react-redux"
import styles from './Options.module.scss'

export const Options = ({handleDropdown, active}:{handleDropdown: (e: any) => void, active: string| null}) => {
    const itemList = useSelector((state:RootState) => state.Items.value);

    //extract unique categories using Set and map
    const categorySet = new Set(itemList.map(item => item.category)) 

    // convert the Set to an array
    const categoryList = Array.from(categorySet)
    
    //capitalize any text
    const capitalizeText = (text: any) => {
        return text && text?.charAt(0).toUpperCase() + text.slice(1);
    };

    const dropDown = {
        background: '#ffff',
        boxShadow: '1px 2px 10px 1px rgba(0,0,0,0.1)',
        borderRadius: '7px',
        padding: '.3em',
    }
    return (
        <div style={dropDown}>
            {categoryList?.map((category: string, index: number) => (
                <div key={index} className={`${styles.option} ${capitalizeText(active) === capitalizeText(category) ? `${styles.active_category}` : '' }`} onClick={handleDropdown}>
                    {category}
                </div>
            ))}
        </div>
    )
  } 