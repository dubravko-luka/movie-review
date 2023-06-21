import { memo } from "react"
import SectionsSwiper from '@/components/Swiper/HomeSections'

const Sections: React.FC = () => {
  return (
    <>
      <SectionsSwiper />
    </>
  )
}

export default memo(Sections)