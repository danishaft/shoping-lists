import { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss'
import { BsArrowLeft} from 'react-icons/bs'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
text: string;
}
export const BackBtn: React.FC<ButtonProps> = ({text, onClick, ...props}) => {
  return (
    <button onClick={onClick} className={styles.back_btn} >
        <BsArrowLeft/>
        {text}
    </button>
  )
}
