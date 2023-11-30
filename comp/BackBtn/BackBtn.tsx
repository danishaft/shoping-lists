import { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
text: string;
}
export const BackBtn: React.FC<ButtonProps> = ({text, onClick, children, ...props}) => {
  return (
    <button onClick={onClick} className={styles.back_btn} >
        {children}
        {text}
    </button>
  )
}
