import React, { memo, useEffect, useRef, useState } from "react"
import { MenuItem, MenuProps } from "@/types/interfaces";
import Link from "next/link";
import styles from './styles.module.css'
import Svg from '@/components/Svg'
import { getMenus } from "@/api/endpoints/menu";

const renderMenu = (menuItems: MenuItem[], closeMenu: () => void, classProps?: string): JSX.Element[] => {

  const handleDropdown = async (ref: any) => {
    if (ref.current) {
      const element = ref.current;
      if (element.classList.contains(styles.active)) {
        element?.classList.remove(styles.active)
      } else {
        element?.classList.add(styles.active)
      }
    }
  };


  return menuItems.map((menuItem, index) => {

    const customHeight: any = {
      '--hg-custom-height': `${(71 * Number(menuItem?.childs?.length)) + 22}px`,
    };

    if (menuItem.childs && menuItem.childs.length > 0) {

      const dropdownRef = useRef<HTMLLIElement>(null);

      // Have childsren
      return (
        <li ref={dropdownRef} onClick={() => handleDropdown(dropdownRef)} key={index} className={`${menuItem.childs ? styles.dropdown : ''} ${classProps ?? ''}`}>
          <div className={`${styles.items} flex items-center justify-between w-full`}>
            <div className="leading-none font-normal text-base whitespace-nowrap inline-flex items-center gap-2">
              {menuItem.nameVi}
              <div className={styles.iconDropdown}>
                <Svg name="chevron-down" />
              </div>
            </div>
          </div>
          <div style={customHeight} className={`${styles.wrapDropdownItem} ${styles['hg-custom']}`}>
            <ul className={`${styles.dropdownItem}`}>
              {renderMenu(menuItem.childs, closeMenu, '')}
            </ul>
          </div>
        </li>
      );
    } else {
      // Not childsren
      return (
        <li key={index} className={`flex items-center justify-between ${classProps ?? ''}`}>
          <div>
            <Link onClick={closeMenu} className={`${styles.items} leading-none font-normal text-base whitespace-nowrap inline-flex items-center gap-2`} href={menuItem.href ?? ''}>{menuItem.nameVi}</Link>
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

  const [menuConfig, setMenuConfig] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      await getMenus().then((res) => {
        if (res && res?.menu) {
          setMenuConfig(res?.menu);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Menu menuItems={menuConfig} closeMenu={closeMenu} />
    </>
  )
}

export default memo(MenuComponent)