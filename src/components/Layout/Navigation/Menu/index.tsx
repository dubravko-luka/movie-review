import React, { memo, useEffect, useState } from "react"
import { MenuItem, MenuProps } from "@/types/interfaces";
import Link from "next/link";
import styles from './styles.module.css'
import Svg from '@/components/Svg'
// import { getMenus } from "@/api/endpoints/menu";
import { MENU_CONFIG } from "./data.demo";

const renderMenu = (menuItems: MenuItem[], closeMenu: () => void, linkParent?: string): JSX.Element[] => {

  return menuItems.map((menuItem, index) => {

    if (menuItem.childs && menuItem.childs.length > 0) {
      // There is a child element
      return (
        <li key={index} className={`${menuItem.childs ? styles.dropdown : ''}`}>
          <div className={`${styles.items} flex items-center justify-between w-full`}>
            <div className="leading-none font-normal text-base whitespace-nowrap inline-flex items-center gap-2">
              {menuItem.nameVi}
              <div className={styles.iconDropdown}>
                <Svg name="chevron-down" />
              </div>
            </div>
          </div>
          <div className={`${styles.wrapDropdownItem} ${styles['hg-custom']}`}>
            <ul className={`${styles.dropdownItem}`}>
              {/* Recursive callback */}
              {renderMenu(menuItem.childs, closeMenu, menuItem.href)}
            </ul>
          </div>
        </li>
      );
    } else {
      // No child element
      return (
        <li key={index} className={`${styles.itemSingle} flex items-center justify-between`}>
          <div>
            <Link onClick={closeMenu} className={`${styles.items} leading-none font-normal text-base whitespace-nowrap inline-flex items-center gap-2`} href={`${linkParent ? `${linkParent}/` : ''}${menuItem.href ?? ''}`}>{menuItem.nameVi}</Link>
          </div>
        </li>
      );
    }
  });
};

const Menu: React.FC<MenuProps & { closeMenu: () => void }> = ({ menuItems, closeMenu }) => {
  return (
    <ul className={styles.wrapMenu}>
      {renderMenu(menuItems, closeMenu)}
    </ul>
  );
};

const MenuComponent: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {

  // Get menu data
  const [menuConfig] = useState([...MENU_CONFIG])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getMenus().then((res) => {
  //       if (res && res?.menu) {
  //         setMenuConfig(res?.menu);
  //       }
  //     });
  //   };

  //   fetchData();
  // }, []);
  // End get menu data

  return (
    <>
      <Menu menuItems={menuConfig} closeMenu={closeMenu} />
    </>
  )
}

export default memo(MenuComponent)