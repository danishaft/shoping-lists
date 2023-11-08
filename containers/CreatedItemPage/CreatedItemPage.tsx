import Image from 'next/image'
import styles from './index.module.scss'
import defaultImage from '../../public/assests/Photo.jpg'
import { Button } from '../../comp'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/lib/redux/store/store'
import { createItem } from '@/lib/redux/slice/addItem'
import { toggle } from '@/lib/redux/slice/toggler'
import { switchSideBarPage} from '@/lib/redux/slice/sidebarFlow'
import { BackBtn } from '../../comp/BackBtn/BackBtn'
import { BsArrowLeft} from 'react-icons/bs'

export const CreatedItemPage = () => {
    const dispatch = useDispatch()
    const newItem = useSelector((state:RootState) => state.Items.newItem )
    const defaultNote = 'You just created an item for your shopping lists. Do well to add this item to the list for your convenience'
    
    function addToList(){
        dispatch(createItem(newItem!))
        dispatch(switchSideBarPage('EditPage'))
        dispatch(toggle(false))
    }
    function goBack(){
        dispatch(switchSideBarPage('CreateNewItemPage'))
    }
  return (
    <section className={styles.createdItem_section}>
        <div className={styles.cont}>
            <BackBtn onClick={goBack} text='Back'>
                <BsArrowLeft/>
            </BackBtn>
            <div className={styles.image}>
                <Image
                    src={defaultImage}
                    alt={newItem.name}
                    height={170}
                    width={700}
                />
            </div>
            <div className={styles.name}>
                <h3 className={styles.title}>name</h3>
                <p className={styles.text}>{newItem.name}</p>
            </div>
            <div className={styles.category}>
                <h3 className={styles.title}>category</h3>
                <p className={styles.small_text}>{newItem.category}</p>
            </div>
            <div className={styles.note}>
                <h3 className={styles.title}>note</h3>
                <article className={styles.small_text}>
                    {newItem.note || defaultNote }
                </article>
            </div>
        </div>
        <div className={styles.bottom}>
            <Button type='button' onClick={goBack} text='delete' bg='#fff' color='#000'/>
            <Button type='button' onClick={addToList} text='Add to list' bg='#F9A109' color='#fff'/>
        </div>
    </section>
  )
}
