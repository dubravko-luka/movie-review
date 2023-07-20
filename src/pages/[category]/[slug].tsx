import Title from '@/components/Head/title';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import DetailFilmContainer from '@/modules/film/view'

const Detail: React.FC = () => {

  const query = useRouter().query

  return (
    <>
      <Title title={`Review Phim | ${query.slug}`} />
      <DetailFilmContainer />
    </>
  )
}

export default memo(Detail)