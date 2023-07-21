import Evaluate from '@/components/Evaluate';
import { useRouter } from 'next/router';
import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Svg from '@/components/Svg';
import Link from 'next/link';
import { alt, handleObjectQuery } from '@/helpers/common';
import { keysQuery } from '@/types/enum';
import { AppRoutes } from '@/utils/routes';

type Props = {
  search: string | null,
  setSearch: React.Dispatch<React.SetStateAction<any>>
}

const Search: React.FC<Props> = ({ search, setSearch }) => {
  const [searchTemp, setSearchTemp] = useState<string | null>(null)
  const router = useRouter()
  const query = router.query

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      searchText()
    }
  };

  const searchText = () => {
    setSearch(searchTemp)
    handleObjectQuery(router, keysQuery.KEY, searchTemp, AppRoutes.search)
  }

  useEffect(() => {
    console.log('==============>', 'search page search');
    if (query[keysQuery.KEY]) {
      setSearch(query[keysQuery.KEY] as string ?? '')
      setSearchTemp(query[keysQuery.KEY] as string ?? '')
    }

    if (!query[keysQuery.KEY]) {
      setSearch(null)
      setSearchTemp(null)
    }
  }, [query[keysQuery.KEY]])

  return (
    <>
      <div className="search relative">
        <input
          value={searchTemp ?? ''}
          onChange={(e) => setSearchTemp(e.target.value)}
          onKeyPress={handleKeyPress}
          onBlur={searchText}
          className={styles.inputSearch}
          type="text"
          placeholder='Tìm kiếm...'
        />
        <div className={`${styles.iconSearch}`} onClick={searchText}>
          <Svg name='search' path='icons' />
        </div>
      </div>
    </>
  )
}

const SearchContainer: React.FC = () => {

  const query = useRouter().query
  const [search, setSearch] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-12 gap-0 border-b border-bd-255">
        <div className="xl:col-span-9 llg:col-span-8 p-7 border-r border-bd-255 col-span-12 pb-5">
          <p className="text-xl font-bold text-left text-white mt-5 mb-10">Kết quả tìm kiếm: {query.key}</p>
          <div className="mt-3">
            <Search search={search} setSearch={setSearch} />
            <div className="grid grid-cols-12 gap-5 mt-5">
              {
                new Array(10).fill(null)?.map((_, index) => (
                  <div className='col-span-12 border-b border-white border-opacity-50 pb-5' key={index}>
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
                          <p className='text-sm text-white mt-2'>Phim lẻ | 2023</p>
                          <p className={`${styles.description} text-11 text-white mt-2`}>Nhu Cầu Tuổi Trẻ - Hard Feelings (2023) hai người bạn thân cố gắng vượt qua thời cấp 3 trong khi ứng phó với những thôi thúc mới đầy xấu hổ cũng như cảm xúc ngượng ngùng giữa cả hai.Nhu Cầu Tuổi Trẻ - Hard Feelings (2023) hai người bạn thân cố gắng vượt qua thời cấp 3 trong khi ứng phó với những thôi thúc mới đầy xấu hổ cũng như cảm xúc ngượng ngùng giữa cả hai.</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 llg:col-span-4 p-7 col-span-12 pb-5">
          <Evaluate />
        </div>
      </div >
    </>
  )
}

export default memo(SearchContainer)