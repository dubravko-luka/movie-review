import Title from '@/components/Head/title';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import CategoryContainer from '@/modules/category'

const Category: React.FC = () => {

  const query = useRouter().query;

  return (
    <>
      <Title title={`Review Phim | ${query.category}`} />
      <CategoryContainer />
    </>
  )
}

export default memo(Category)