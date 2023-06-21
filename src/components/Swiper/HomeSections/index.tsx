import { memo } from 'react';

import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDE_DEMO } from './data.demo';
import { Slide } from '@/types/interfaces';
import { alt } from '@/helpers/common';
import styles from './styles.module.css'
import Link from 'next/link';
import Svg from '@/components/Svg';

interface Props {
  data?: Slide
}

const TemplateSlide: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Link href={data?.href ?? ''}>
        <div className={`${styles.slide} relative overflow-hidden`}>
          <img className={`${styles.homeSildeImg}`} src={data?.image ?? ''} alt={alt} />
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

  return (
    <div className='w-full relative'>
      <Swiper
        spaceBetween={16}
        slidesPerView={2}
        slidesPerGroup={4}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          }
        }}
        navigation={{
          enabled: true,
          nextEl: '.review-section-home-swiper-button-next',
          prevEl: '.review-section-home-swiper-button-prev',
        }}
        loop={true}
        pagination={{ el: '.home-slide-pagination', clickable: true }}
        modules={[Pagination, Navigation]}
        className="home-section-review-swiper"
      >
        {
          SLIDE_DEMO.map((item, index) => (
            <SwiperSlide key={index}>
              <TemplateSlide data={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className={`${styles.iconNavigation} ${styles.iconNavLeft} top-2/4 left-0 review-section-home-swiper-button-prev absolute`}>
        <Svg path='icons' name='chevron-left' />
      </div>
      <div className={`${styles.iconNavigation} ${styles.iconNavRight} top-2/4 right-0 -translate-x-2/4 review-section-home-swiper-button-next absolute`}>
        <Svg path='icons' name='chevron-right' />
      </div>
    </div >
  );
};

export default memo(SwiperHome)