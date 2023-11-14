import { CSSProperties, memo } from "react";
import styles from './index.module.scss'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

interface QuantityProps {
    quantity: number;
    status: boolean;
    onDecrease: () => void;
    onIncrease: () => void;
    onHover: () => void;
    onLeave: () => void;
    handleDelete: () => void;
    saveList: boolean;
}



export const QuantityActionBtn: React.FC<QuantityProps> = memo(function QuantityActionBtn (props) {
    const {quantity, status, onDecrease, onIncrease, handleDelete, onHover, onLeave, saveList} = props
    return(
            <>
              {
                      saveList && 
                      <div style={{background: '#FFF0DE'}} className={styles.countSec_open} aria-roledescription='item count' >
                        <span className={styles.count_logic}>
                          <button className={styles.count} aria-controls='item-actions'>
                            {`${quantity} pcs`}
                          </button>
                        </span>
                      </div>
              }
              {
                      !status && !saveList &&
                      <div style={{background: '#FFF0DE'}} className={styles.countSec_open} aria-roledescription='item count' >
                        <span className={styles.count_logic}>
                          <button className={styles.count} aria-controls='item-actions' onMouseOver={onHover}>
                            {`${quantity} pcs`}
                          </button>
                        </span>
                      </div>
              }
                {
                    status  && !saveList &&
                    <div className={styles.countSec_open} id='item-actions' onMouseLeave={onLeave} >
                        <span className={styles.delete} aria-roledescription='delete item button' onClick={handleDelete}>
                            <MdDeleteOutline/>
                        </span>
                      <span className={styles.count_logic}>
                        <AiOutlineMinus className={styles.action_btn} aria-roledescription='decrease quantity' onClick={onDecrease}/>
                        <button className={styles.count} aria-controls='item-actions'>
                          {`${quantity} pcs`}
                        </button>
                        <AiOutlinePlus className={styles.action_btn} aria-roledescription='increase quantity' onClick={onIncrease}/>
                      </span>
                    </div>
                }
            </>
    )
})
