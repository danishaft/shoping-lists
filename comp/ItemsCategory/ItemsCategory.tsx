import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/lib/redux/store/store";
import {ItemsCard} from "@/comp"
import styles from './ItemsCategory.module.scss'
import { Item } from "@/lib/redux/slice/addItem";
export const ItemsCategory = ({title}: {title: string}) => {
// capitalize any text
  const capitalizeText = (text: any) => {
    return text && text?.charAt(0).toUpperCase() + text.slice(1);
};
//redux state
  const data = useSelector((state:RootState) => state.Items.value) 
  //filter items based on category
  const filterItem = data.filter(item => capitalizeText(title) === capitalizeText(item.category) )

  // console.log(data)
  return (
    <div className={styles.category}>
      <h2>{title}</h2>
        <div className={styles.list}>
          {filterItem.map((item, index) => (
            <ItemsCard key={index} text={item.name}/>
          ))}
        </div>
    </div>
  )
}
