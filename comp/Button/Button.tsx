import styles from './Button.module.scss'
export const Button = ({text, bg, color}:{text: string; bg: string, color: string}) => {
    const Style = {
        background: `${bg}`,
        color: `${color}`
    }
  return (
    <div style={Style} className={styles.btn}>
        {text}
    </div>
  )
}
