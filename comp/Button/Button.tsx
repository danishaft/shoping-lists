import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bg: string;
  color: string;
}

export const Button: React.FC<ButtonProps> = ({text, bg, color, onClick, ...props}) => {
    const Style = {
        background: `${bg}`,
        color: `${color}`
    }
  return (
    <button style={Style} className={styles.btn} onClick={onClick}>
        {text}
    </button>
  )
}
