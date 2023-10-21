import { Button } from '..'
import styles from './CreateItem.module.scss'
export const CreateItem = () => {
  return (
    <section className={styles.createItem_sec}>
      <div className={styles.cont}>
        <h2>Add a new item</h2>
        <form>
          <label htmlFor="name">Name</label><br />
          <input type="text" name='name' placeholder='Enter a name' /><br />

          <label htmlFor="note">Note</label><br/>
          <textarea name='note' placeholder='Enter a note' />
        </form>
      </div>
      <div className={styles.bottom}>
        <Button text='cancel' bg='#fff' color='#000'/>
        <Button text='Save' bg='#F9A109' color='#fff'/>
      </div>
    </section>
  )
}

