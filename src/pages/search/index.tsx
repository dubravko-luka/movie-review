import Title from '@/components/Head/title';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import SearchContainer from '@/modules/search'

const Search: React.FC = () => {

  const query = useRouter().query

  return (
    <>
      <Title title={`${query?.key ?? 'Review Phim'} | Review Phim`} />
      <SearchContainer />
    </>
  )
}

export default memo(Search)