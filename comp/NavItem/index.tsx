'use client'
import Link from "next/link"
import styles from "./index.module.scss"
import { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
const NavItem = ({children, path}: {children: ReactNode, path: string}) => {
  const [active, setActive] = useState(false)
  const pathname = usePathname();
  useEffect(() => {
    if (path === pathname){
      setActive(true)
    }else {
      setActive(false)
    }
  }, [pathname, path])
  return (
    <Link href={path} className={styles.nav_item}>
        {active && <div className={styles.nav_indicator}></div>}
        {children}
    </Link>
  )
}

export default NavItem