import { memo } from "react";
import styles from './ProgressBar.module.scss'
import { capitalizeText } from "@/hooks/useCapitalize";

export const ProgressBar: React.FC<{ bgcolor: string, percentage: number , title: string}> = memo(function ProgressBar({ bgcolor, percentage, title }){
    const containerStyles = {
        height: 7,
        width: '100%',
        backgroundColor: "#E0E0E0",
        borderRadius: 20,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${percentage}%`,
        transition: 'width 1s ease-in-out',
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
      }

      
    return(
        <article className={styles.progress_cont}>
            <div className={styles.progress_details}>
                <h3>{capitalizeText(title)}</h3>
                <p>{percentage}%</p>
            </div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                </div>
            </div>
        </article>
    )
})
