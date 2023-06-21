import { MenuItem } from "@/types/interfaces";

export const MENU_CONFIG: MenuItem[] = [
  {
    "childs": [],
    "nameVi": "Trang chủ",
    "nameEn": "Home",
    "href": "/"
  },
  {
    "childs": [],
    "nameVi": "Phim lẻ",
    "nameEn": "Movies",
    "href": "/phim-le"
  },
  {
    "childs": [],
    "nameVi": "Phim bộ",
    "nameEn": "Series movies",
    "href": "/phim-bo"
  },
  {
    "childs": [
      {
        "childs": [],
        "nameVi": "Phim chiếu rạp",
        "nameEn": "Movie theaters",
        "href": "phim-chieu-rap"
      }
    ],
    "nameVi": "Thể loại",
    "nameEn": "Category",
    "href": "/the-loai"
  },
  {
    "childs": [
      {
        "childs": [],
        "nameVi": "Phim Âu Mỹ",
        "nameEn": "European and American movies",
        "href": "phim-au-my"
      },
      {
        "childs": [],
        "nameVi": "Phim Hàn Quốc",
        "nameEn": "Korea film",
        "href": "phim-han-quoc"
      }
    ],
    "nameVi": "Quốc gia",
    "nameEn": "Nation",
    "href": "/quoc-gia"
  }
]