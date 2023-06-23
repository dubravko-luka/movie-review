import { AppRoutes } from '@/utils/routes';
import Link from 'next/link';
import React, { memo } from 'react';
import styles from './styles.module.css'

const Footer: React.FC = () => {
  return (
    <footer className='bg-main px-7 py-10'>
      <div className={`sectionTop grid grid-cols-12 ssm:gap-7 gap-1`}>
        <div className="footer-section md:col-span-4 col-span-12 max-w-sm md:text-left text-center m-auto">
          <div>
            <img className={`${styles.logo} md:mx-0 mx-auto`} src="/images/logos/reviewphim.png" alt="Logo" />
            <p className={`${styles.textFooter} text-white`}>
              <Link className="text-link" href={AppRoutes.home}>ReviewPhim </Link>
              - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.</p>
          </div>
        </div>
        <div className="md:col-span-8 col-span-12 flex justify-end">
          <div className={`${styles.textFooter} ssm:grid grid-cols-12 llg:gap-3 gap-2 w-full`}>
            <div className="col-span-3 lg:block hidden"></div>
            <div className="footer-section lg:col-span-3 col-span-4">
              <ul className='md:pl-0 pl-5 ssm:mb-0 mb-5'>
                <li className='text-white py-2.5 font-bold'>Phim mới</li>
                <li className='text-link py-1.5'>Phim Đam Mỹ</li>
                <li className='text-link py-1.5'>Phim Tình Cảm</li>
                <li className='text-link py-1.5'>Phim Cổ Trang</li>
                <li className='text-link py-1.5'>Phim Chiếu Rạp</li>
              </ul>
            </div>
            <div className="footer-section lg:col-span-3 col-span-4">
              <ul className='md:pl-0 pl-5 ssm:mb-0 mb-5'>
                <li className='text-white py-2.5 font-bold'>Phim lẻ</li>
                <li className='text-link py-1.5'>Phim Hành Động</li>
                <li className='text-link py-1.5'>Phim Khoa Học</li>
                <li className='text-link py-1.5'>Phim Viễn Tưởng</li>
                <li className='text-link py-1.5'>Phim Phiêu Lưu</li>
              </ul>
            </div>
            <div className="footer-section lg:col-span-3 col-span-4">
              <ul className='md:pl-0 pl-5 ssm:mb-0 mb-5'>
                <li className='text-white py-2.5 font-bold'>Phim bộ</li>
                <li className='text-link py-1.5'>Phim Thái Lan</li>
                <li className='text-link py-1.5'>Phim Trung Quốc</li>
                <li className='text-link py-1.5'>Phim Hàn Quốc</li>
                <li className='text-link py-1.5'>Phim Nhật Bản</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
