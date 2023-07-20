import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import { alt } from '@/helpers/common';
import ReactStars from 'react-rating-stars-component';
import Svg from '@/components/Svg';

const Video: React.FC = () => {

  const refVideo: any = useRef(null);
  const [height, setHeight] = useState(0);

  /* eslint-disable */
  useEffect(() => {
    function updateSize() {
      const _height = (Number(refVideo?.current?.offsetWidth) / 1.77777777778); // 560 * 315
      setHeight(isNaN(_height) ? height : _height);
    }

    if (refVideo) {
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }
  }, [refVideo]);
  /* eslint-enable */

  return (
    <>
      <iframe ref={refVideo} style={{ width: '100%' }} height={height} src="https://www.youtube.com/embed/htLCWVLGWk0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </>
  )
}

const Rating: React.FC = () => {

  const [ratting, setRatting] = useState<any>();

  const generateratting = () => {
    setRatting(<ReactStars count={10} size={20} value={8.3} isHalf={true} edit={false} />);
  };

  /* eslint-disable */
  useEffect(() => {
    generateratting();
  }, []);
  /* eslint-enable */

  return (
    <>
      {ratting}
    </>
  )
}

const Detail: React.FC = () => {
  return (
    <>
      <div className={`${styles.wrapper} grid grid-cols-12 gap-5`}>
        <div className="col-span-12">
          <Video />
        </div>
        <div className={`${styles.report} col-span-12 pb-4`}>
          <div className="flex justify-end">
            <div className={`${styles.reportError}`}>
              Report Error
            </div>
          </div>
        </div>
        <div className={`${styles.detailBasic} col-span-12 pb-4`}>
          <div className="ssm:flex grid ssm:gap-5 gap-3">
            <div className={`${styles.poster} relative overflow-hidden`}>
              <img className={`${styles.posterImg}`} src={'https://phimmoiyyy.net/wp-content/uploads/2023/06/Phim-Transformers-7.jpg'} alt={alt} />
            </div>
            <div className="info">
              <div className="name">
                <p className='ssm:text-3xl text-2xl font-normal pb-1.5'>Vân Sơn Chuyển Âm Châu Tinh Trì | Đường Bá Hổ Điểm Thu Hương | Film Bản Gốc </p>
              </div>
              <div className="description py-1.5">
                <p className='text-13'>Transformers: Rise of the Beasts 2023</p>
              </div>
              <div className="flex gap-3 py-1.5">
                <p className='text-13 opacity-20'>Jul. 14, 2023</p>
                <p className='text-13'>110 phút</p>
                <p className='text-13'>USA</p>
              </div>
              <div className={`${styles.rating} flex my-2.5 py-2.5 gap-5 items-center`}>
                <div className="point">
                  <p className={`${styles.point}`}>8.3</p>
                </div>
                <div className="detail-rating">
                  <Rating />
                  <p className={`${styles.countRating} text-xs`}>368 đánh giá</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.description} col-span-12 pb-4`}>
          <p className='text-lg font-bold'>Tóm tắt</p>
          <div className='text-sm' dangerouslySetInnerHTML={{ __html: `Transformers 7: Quái Thú Trỗi Dậy – Transformers: Rise of the Beasts (2023) dựa trên sự kiện Beast Wars trong loạt phim hoạt hình “Transformers”, nơi mà các robot có khả năng biến thành động vật khổng lồ cùng chiến đấu chống lại một mối đe dọa tiềm tàng.` }}></div>
        </div>
        <div className={`${styles.share} col-span-12 pb-4`}>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <p className='text-base font-medium opacity-80'>Chia sẻ</p>
              <p className='text-base font-medium'>106</p>
            </div>
            <div className='flex gap-2'>
              <div>
                <Svg name="facebook" path='icons' />
              </div>
              <div>
                <Svg name="twitter" path='icons' />
              </div>
              <div>
                <Svg name="pinterest" path='icons' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Detail)