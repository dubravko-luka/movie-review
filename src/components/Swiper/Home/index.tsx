import { memo, useEffect, useLayoutEffect, useState } from 'react';

import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDE_DEMO } from './data.demo';
import { Slide } from '@/types/interfaces';
import { alt } from '@/helpers/common';
import styles from './styles.module.css'
import Link from 'next/link';

interface Props {
  data?: Slide
}

const TemplateSlide: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Link href={data?.href ?? ''}>
        <div className='slide relative'>
          <img className={styles.homeSildeImg} src={data?.image ?? ''} alt={alt} />
          <div className={styles.homeSildeDescriptionGroup}>
            <p className={styles.homeSlideName}>{data?.name ?? ''}</p>
            <p className={styles.homeSlideDescription}>{data?.description ?? ''}</p>
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

  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (width === 0) {
      setWidth(window.innerWidth)
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full relative pb-10'>
      <Swiper
        spaceBetween={16}
        slidesPerView={width > 991 ? 2 : 1}
        slidesPerGroup={width > 991 ? 2 : 1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        // pagination={{
        //   clickable: true,
        // }}
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