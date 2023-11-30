'use client'
import Link from "next/link"
import styles from "./NavItem.module.scss"
import React, { ReactNode, memo, useEffect, useState } from "react"
import { usePathname} from "next/navigation"

interface NavItemProps {
  children: ReactNode,
  path: string
}


const NavItem: React.FC<NavItemProps> = ({children, path}) => {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname();
  useEffect(() => {
      setIsActive(pathname === path || (path !== '/' && pathname.startsWith(path)));
  }, [pathname, path])
  
  const activeClass = isActive ? styles.active_nav_item : ""
  return (
    <li className={`${styles.nav_item} ${activeClass}`}>                            
      <Link href={path} className={styles.nav_link}>
        {children}
      </Link>
    </li>
  )
}

export default memo(NavItem)