import React, { memo } from "react";
import HomeContainer from "@/modules/home";
import Title from "@/components/Head/title";

const HomePage: React.FC = () => {

  return (
    <>
      <Title title="Review Phim | Trang Chủ" />
      <HomeContainer />
    </>
  )
}

export default memo(HomePage)
