import React, { memo, useEffect, useState } from "react"
import styles from './styles.module.css'
import Menu from "./Menu"
import { alt, handleObjectQuery } from "@/helpers/common"
import Svg from "@/components/Svg"
import { AppRoutes } from "@/utils/routes"
import Link from "next/link"
import { Helmet } from "react-helmet";
import { useRouter } from "next/router"
import { keysQuery } from "@/types/enum"

const Navigation: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const handleMenuClick = () => {
    setOpenMenu(false);
  }

  // Handle the scroll event to hide and show navigation
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(prevScrollPos < currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // End handle the scroll event to hide and show navigation

  // SEARCH
  const [searchTemp, setSearchTemp] = useState<string | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const router = useRouter()
  const query = router.query

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      searchText()
    }
  };

  const searchText = () => {
    setSearch(searchTemp)
    setShowSearch(false)
    handleObjectQuery(router, keysQuery.KEY, searchTemp, AppRoutes.search)
  }

  useEffect(() => {
    console.log('==============>', 'search navigation');
    if (query[keysQuery.KEY]) {
      setSearch(query[keysQuery.KEY] as string ?? '')
      setSearchTemp(query[keysQuery.KEY] as string ?? '')
    }

    if (!query[keysQuery.KEY]) {
      setSearch(null)
      setSearchTemp(null)
    }
  }, [query[keysQuery.KEY]])
  // END SEARCH

  return (
    <>
      <Helmet>
        {openMenu && (
          <style>{`
            html, body {
              overflow: hidden;
            }
          `}</style>
        )}
      </Helmet>
      <header className={`${styles.navigation} ${isHidden ? styles.hidden : ''} flex justify-center`}>
        <div className={styles.wrapper}>
          <div className={`${styles.wrapMenu} w-full`}>
            <div className="w-full grid grid-cols-12 items-center justify-between gap-x-5">
              {/* ICON MOBILE */}
              <div className="llg:hidden col-span-1 relative">
                <div className={`${styles.openMenu} cursor-pointer`}>
                  {
                    !openMenu
                      ? (
                        <div onClick={() => setOpenMenu(true)}>
                          <Svg name="menu-mobile-open" />
                        </div>
                      ) : (
                        <div onClick={() => setOpenMenu(false)}>
                          <Svg name="menu-mobile-close" />
                        </div>
                      )
                  }
                </div>
              </div>
              <div className="llg:col-span-11 col-span-10 flex gap-6 items-center llg:justify-start justify-center">
                {/* LOGO */}
                <Link href={AppRoutes.home} className="logo">
                  <img className={styles.logo} src="/images/logos/reviewphim.png" alt={alt} />
                </Link>
                {/* MAIN MENU */}
                <div className={`${styles.menu} ${openMenu ? styles.menuOpen : ''}`}>
                  <div onClick={handleMenuClick} className={`${styles.bdMenu} ${openMenu ? styles.bdMenuOpen : ''}`}></div>
                  <Menu closeMenu={handleMenuClick} />
                </div>
              </div>
              {/* ICON SEARCH */}
              <div className="col-span-1 relative">
                <div className={styles.menuRight}>
                  <div className="icons z-9999" onClick={() => {
                    if (showSearch) {
                      searchText()
                      setShowSearch(false)
                    } else {
                      setShowSearch(true)
                    }
                  }}>
                    <Svg path="icons" name="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FORM SEARCH */}
        <div className={`${styles.formSearch} w-full ${showSearch ? styles.show : ''}`}>
          <div className={`grid grid-cols-12 w-full h-full items-center justify-center`}>
            <div className="icons col-span-1 flex items-center justify-center" onClick={() => setShowSearch(false)}>
              <Svg name="arrow-left" />
            </div>
            <div className="h-8 col-span-11">
              <input
                value={searchTemp ?? ''}
                onChange={(e) => setSearchTemp(e.target.value)}
                onKeyPress={handleKeyPress}
                onBlur={searchText}
                className={`w-full h-full ${styles.inputSearch}`}
                type="text"
                placeholder='Tìm kiếm...'
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default memo(Navigation)