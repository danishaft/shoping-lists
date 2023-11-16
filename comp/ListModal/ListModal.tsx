import { Portal } from "@/utils/Portal"
import { memo } from "react"
import { MdOutlineClose } from "react-icons/md"
import { Button } from ".."
import styles from './index.module.scss'

interface ListModalProps{
    isModalOpen: boolean
    closeModal: () => void
    cancelList: () => void
}

export const ListModal: React.FC<ListModalProps> = memo(function ListModal(props) {
    const {closeModal, isModalOpen, cancelList} = props
    return isModalOpen && (
      <Portal>
          <div className={styles.list_modal}>
            <div className={styles.top}>
                <p>Are you sure that you want to cancel this list?</p>
                <button type="button" onClick={closeModal}><MdOutlineClose/></button>
            </div>
            <div className={styles.bottom}>
                <Button
                    text="cancel"
                    onClick={closeModal}
                    bg="none"
                    color="#34333A"
                />
                <Button
                    text="Yes"
                    bg="#EB5757"
                    color="#FFFFFF"
                    onClick={() => {cancelList(); closeModal()}}
                />
            </div>
          </div>
      </Portal>
    )
  })
