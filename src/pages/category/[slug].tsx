import React, { memo } from "react";
import CategoryContainer from "@/modules/category/list";
import Title from "@/components/Head/title";
import { useRouter } from 'next/router';

const CategoryPage: React.FC = () => {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Title title={`${slug ?? 'Review Phim'} | Review Phim`} />
      <CategoryContainer />
    </>
  )
}

export default memo(CategoryPage)
