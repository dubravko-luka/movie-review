import { memo } from "react"
import styles from './styles.module.css'
import Link from "next/link"
import { alt } from "@/helpers/common"
import Svg from "../Svg"

const EvaluateMain: React.FC = () => {
  return (
    <Link href={`/phim-le/chau-tinh-tri`}>
      <div className={`${styles.main} relative`}>
        <img className={styles.imgMain} src="https://image.tmdb.org/t/p/w500/n2b9fTgkRosM0UrAdD7UkkHz5Ky.jpg" alt={alt} />
        <div className={styles.info}>
          <div className={styles.name}>Nhục Bồ Đoàn 3: Đại Nội Mật Thám</div>
          <p className={styles.date}>1996</p>
        </div>
        <div className={styles.playButton}>
          <img src="/images/icons/play.svg" className="w-12" alt={alt} />
        </div>
      </div>
    </Link>
  )
}

const EvaluateItem: React.FC = () => {
  return (
    <>
      <Link href={`/phim-le/chau-tinh-tri`}>
        <div className={styles.itemMain}>
          <div className={styles.itemImageWrap}>
            <img className={styles.itemImage} src="https://wegotthiscovered.com/wp-content/uploads/2022/04/One-Piece.jpeg" alt={alt} />
            <div className={styles.playButton}>
              <img src="/images/icons/play.svg" className="w-12" alt={alt} />
            </div>
          </div>
          <div className={`${styles.itemInfo}`}>
            <p className={styles.name}>HOT | Người Tình Đầu Tiên Của Luffy Là Đây | One Piece</p>
            <div className={`${styles.pointWrap} py-1 flex items-center justify-start gap-1`}>
              <div className={`${styles.points} flex gap-1 items-center justify-center`}>
                <div className={styles.star}>
                  <Svg path="icons" name="star" />
                </div>
                <p className={styles.point}>10</p>
              </div>
              <p className={styles.itemDate}>2023</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

const Evaluate: React.FC = () => {
  return (
    <>
      <div className="main mb-5">
        <div className={`${styles.title} text-white py-3 mb-3 border-b border-bd-255`}>
          <p>Đánh giá</p>
        </div>
        <EvaluateMain />
      </div>
      <div className="grid grid-cols-12 gap-3 llg:gap-y-3 gap-y-6">
        {
          new Array(9).fill(null).map((item, index) => (
            <div key={index} className="llg:col-span-12 sm:col-span-4 ssm:col-span-6 col-span-12">
              <EvaluateItem />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default memo(Evaluate)