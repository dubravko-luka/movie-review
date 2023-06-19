export interface MenuItem {
  nameVi: string;
  nameEn: string;
  href: string;
  childs?: MenuItem[];
}

export interface MenuProps {
  menuItems: MenuItem[];
}