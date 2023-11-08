'use client'
import Link from "next/link"
import styles from "./NavItem.module.scss"
import React, { ReactNode, memo, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface NavItemProps {
  children: ReactNode,
  path: string
}


const NavItem: React.FC<NavItemProps> = ({children, path}) => {
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
    <li className={`${styles.nav_item} ${activeClass}`}>                            
      <Link href={path} className={styles.nav_link}>
        {children}
      </Link>
    </li>
  )
}

export default memo(NavItem)