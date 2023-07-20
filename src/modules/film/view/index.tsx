import Evaluate from '@/components/Evaluate';
import Detail from '@/components/Film/Detail';
import QandA from '@/components/QandA';
import Recommend from '@/components/Recommend';
import SectionsSwiper from '@/components/Swiper/HomeSections'
import React, { memo } from 'react';

const DetailFilm: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-0 border-b border-bd-255">
        <div className="xl:col-span-9 llg:col-span-8 p-7 pb-0 border-r border-bd-255 col-span-12">
          <div className="w-full">
            <Detail />
          </div>
          <div className="w-full">
            <QandA />
          </div>
          <div className="w-full pb-5">
            <SectionsSwiper id={`swiper-recomment-detail`} />
          </div>
        </div>
        <div className="xl:col-span-3 llg:col-span-4 p-7 col-span-12">
          <div className="w-full inline-grid">
            <div className="llg:order-1 order-1 w-full">
              <Recommend />
            </div>
          </div>
          <Evaluate />
        </div>
      </div>
    </>
  )
}

export default memo(DetailFilm)