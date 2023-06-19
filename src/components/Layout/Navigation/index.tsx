import React, { memo, useEffect, useState } from "react"
import styles from './styles.module.css'
import Menu from "./Menu"
import { alt } from "@/helpers/common"

const Navigation: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuClick = () => {
    setOpenMenu(false);
  }

  return (
    <header className={`${styles.navigation} flex justify-center`}>
      <div className={styles.wrapper}>
        <div className={`${styles.wrapMenu} container w-full`}>
          <div className="w-full grid grid-cols-12 items-center gap-x-5">
            <div className="col-span-12 flex gap-6 items-center justify-start">
              <div className="logo">
                <img className={styles.logo} src="/images/logos/reviewphim.png" alt={alt} />
              </div>
              <div className={`${styles.menu} ${openMenu ? styles.menuOpen : ''}`}>
                <div onClick={handleMenuClick} className={`${styles.bdMenu} ${openMenu ? styles.bdMenuOpen : ''}`}></div>
                <Menu closeMenu={handleMenuClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Navigation)