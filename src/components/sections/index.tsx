import { memo } from "react"
import SectionsSwiper from '@/components/Swiper/HomeSections'
import { SECTION } from "./data.demo"
import styles from './styles.module.css'
import Link from "next/link"

const Sections: React.FC = () => {

  return (
    <>
      {
        (SECTION).map((item, index) => (
          <div key={index} className="mb-6 border-b last:border-b-0 border-bd-255 pb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold llg:text-2xl text-lg text-white">{item.name}</p>
              <Link href={`/${item.href}`}>
                <div className={styles.viewAll}>Xem tất cả</div>
              </Link>
            </div>
            <SectionsSwiper id={`swiper-section-home-${index}`} />
          </div>
        ))
      }
    </>
  )
}

export default memo(Sections)