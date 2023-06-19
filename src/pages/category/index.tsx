import React, { memo } from "react";
import CategoryContainer from "@/modules/category";
import Title from "@/components/Head/title";

const CategoryPage: React.FC = () => {

  return (
    <>
      <Title title="Thể Loại" />
      <CategoryContainer />
    </>
  )
}

export default memo(CategoryPage)
