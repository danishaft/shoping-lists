'use client'
import Link from "next/link"
import styles from "./NavItem.module.scss"
import { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
export const NavItem = ({children, path}: {children: ReactNode, path: string}) => {
  const [active, setActive] = useState(false)
  const pathname = usePathname();
  useEffect(() => {
    if (path === pathname){
      setActive(true)
    }else {
      setActive(false)
    }
  }, [pathname, path])

  const activeClass = active ? styles.active_nav_item : ""
  return (
    // <Link href={path} className={styles.nav_item}>
    //     {active && <div className={styles.nav_indicator}></div>}
    //     {children}
    // </Link>
    
    <li className={`${styles.nav_item} ${activeClass}`}>                            
      <Link href={path} className={styles.nav_link}>
        {children}
      </Link>
    </li>
  )
}
