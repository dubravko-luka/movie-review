import { memo } from "react"
import SectionsSwiper from '@/components/Swiper/HomeSections'
import { SECTION } from "./data.demo"
import styles from './styles.module.css'
import Link from "next/link"
import { SLIDE_DEMO } from "@/components/Swiper/HomeSections/data.demo"
import { alt } from "@/helpers/common"

const Sections: React.FC = () => {

  return (
    <>
      {
        (SECTION).map((item, index) => (
          <div key={index} className="mb-6 border-b last:border-b-0 border-bd-255 pb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold llg:text-2xl text-lg text-white">{item.name?.toUpperCase()}</p>
            </div>
            <SectionsSwiper id={`swiper-section-home-${index}`} />
          </div>
        ))
      }
      <div className="w-full">
        <div className="col-span-12">
          <div className="flex items-center justify-between mb-4">
            <p className="font-bold llg:text-2xl text-lg text-white">{'Phim bộ mới cập nhật'?.toUpperCase()}</p>
          </div>
        </div>
        <div className={`grid xxl:grid-cols-12 xl:grid-cols-10 grid-cols-12 gap-4`}>
          {
            [...SLIDE_DEMO, ...SLIDE_DEMO]?.map((item, index) => (
              <Link href={`/${item?.category}/${item?.href}` ?? ''} key={index} className="xl:col-span-2 lg:col-span-3 ssm:col-span-4 col-span-6">
                <div className={`${styles.slide} relative overflow-hidden`}>
                  <img className={`${styles.homeSildeImg}`} src={item?.image ?? ''} alt={alt} />
                  <div className={styles.homeSildeDescriptionGroup}>
                    <p className={styles.homeSlideName}>{item?.name ?? ''}</p>
                    <p className={styles.homeSlideDate}>{item?.date ?? ''}</p>
                  </div>
                  <div className={styles.homeSlideTagGroup}>
                    {
                      item?.tags?.map((tag, index) => (
                        <div className={styles.homeSlideTag} key={index}>{tag}</div>
                      ))
                    }
                  </div>
                  <div className={styles.playButton}>
                    <img src="/images/icons/play.svg" className="w-12" alt={alt} />
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default memo(Sections)