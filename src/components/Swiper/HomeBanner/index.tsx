import { memo } from 'react';

import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDE_DEMO } from './data.demo';
import { Slide } from '@/types/interfaces';
import { alt } from '@/helpers/common';
import styles from './styles.module.css'
import Link from 'next/link';
import { useAppState } from '@/contexts';

interface Props {
  data?: Slide
}

const TemplateSlide: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Link href={`/${data?.category}/${data?.href}` ?? ''}>
        <div className={`${styles.slide} relative overflow-hidden`}>
          <img className={`${styles.homeSildeImg} hover:scale-110`} src={data?.image ?? ''} alt={alt} />
          <div className={styles.homeSildeDescriptionGroup}>
            <p className={styles.homeSlideName}>{data?.name ?? ''}</p>
            <p className={styles.homeSlideDate}>{data?.date ?? ''}</p>
          </div>
          <div className={styles.homeSlideTagGroup}>
            {
              data?.tags?.map((tag, index) => (
                <div className={styles.homeSlideTag} key={index}>{tag}</div>
              ))
            }
          </div>
        </div>
      </Link>
    </>
  )
}

const SwiperHome = () => {

  const { appState } = useAppState();

  return (
    <div className='w-full relative pb-10'>
      <Swiper
        spaceBetween={16}
        slidesPerView={Number(appState?.widthClient) > 991 ? 2 : 1}
        slidesPerGroup={Number(appState?.widthClient) > 991 ? 2 : 1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop
        pagination={{ el: '.home-slide-pagination', clickable: true }}
        modules={[Autoplay, Pagination]}
        className="home-review-swiper"
      >
        {
          SLIDE_DEMO.map((item, index) => (
            <SwiperSlide key={index}>
              <TemplateSlide data={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="home-slide-pagination"></div>
    </div>
  );
};

export default memo(SwiperHome)