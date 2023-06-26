export interface MenuItem {
  nameVi: string;
  nameEn: string;
  href: string;
  childs?: MenuItem[];
}

export interface MenuProps {
  menuItems: MenuItem[];
}

export interface Slide {
  image: string
  href: string
  name?: string
  date?: string
  tags: string[]
}

export interface IGoogleDriveConfig {
  clientId: string
  clientSecret: string
  redirectUrl: string
  refreshToken: string
}