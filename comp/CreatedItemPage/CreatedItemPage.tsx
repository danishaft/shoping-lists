import Image from 'next/image'
import styles from './index.module.scss'
import defaultImage from '../../public/assests/Photo.jpg'
import { Button } from '..'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/lib/redux/store/store'
import { createItem } from '@/lib/redux/slice/addItem'
import { toggle } from '@/lib/redux/slice/toggler'
import { switchSideBarPage} from '@/lib/redux/slice/sidebarFlow'

export const CreatedItemPage = () => {
    const dispatch = useDispatch()
    const newItem = useSelector((state:RootState) => state.Items.newItem )
    const defaultNote = 'You just created an item for your shopping lists. Do well to add this item to the list for your convenience'
    
    function addToList(){
        dispatch(createItem(newItem))
        dispatch(switchSideBarPage('EditPage'))
        dispatch(toggle(false))
    }
  return (
    <section className={styles.createdItem_section}>
        <div className={styles.cont}>
            <div className={styles.image}>
                <Image
                    src={defaultImage}
                    alt={newItem.name}
                    height={170}
                    width={700}
                />
            </div>
            <div className={styles.name}>
                <h3>name</h3>
                <p>{newItem.name}</p>
            </div>
            <div className={styles.category}>
                <h3>category</h3>
                <p>{newItem.category}</p>
            </div>
            <article className={styles.note}>
                {newItem.note || defaultNote }
            </article>
        </div>
        <div className={styles.bottom}>
            <Button text='delete' type='button' bg='#fff' color='#000'/>
            {/* <Button type='button' onClick={addToList} text='Add to list' bg='#F9A109' color='#fff' /> */}
            <button onClick={addToList}>add to lister</button>
        </div>
    </section>
  )
}
