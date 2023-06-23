import { memo } from "react"
import styles from './styles.module.css'
import Link from "next/link"
import { alt } from "@/helpers/common"

const RecommendItem: React.FC = () => {
  return (
    <>
      <Link href={'/'}>
        <div className={styles.itemMain}>
          <div className={styles.itemImageWrap}>
            <img className={styles.itemImage} src="https://minhtuanmobile.com/uploads/blog/kimetsu-no-yaiba-ss3-cong-bo-thoi-gian-phat-song-tap-cuoi-230613013901.jpg" alt={alt} />
          </div>
          <div className={`${styles.itemInfo}`}>
            <p className={styles.name}>Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc (Lồng Tiếng Việt)</p>
            <p className={styles.type}>Siêu Nhiên / Phiêu Lưu</p>
            <p className={styles.view}>124.4K Lượt xem</p>
          </div>
        </div>
      </Link>
    </>
  )
}

const Recommend: React.FC = () => {
  return (
    <>
      <div className="main mb-10">
        <div className={`${styles.title} text-white py-3 mb-3 border-b border-bd-255`}>
          <p>Đề xuất cho bạn</p>
        </div>
        <div className="grid grid-cols-12 gap-3 llg:gap-y-3 gap-y-6">
          {
            new Array(10).fill(null)?.map((_, index) => (
              <div key={index} className="llg:col-span-12 sm:col-span-4 ssm:col-span-6 col-span-12">
                <RecommendItem />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default memo(Recommend)