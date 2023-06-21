import React, { memo, useEffect } from "react";
import HomeContainer from "@/modules/home";
import Title from "@/components/Head/title";
import { useRouter } from "next/router";

const HomePage: React.FC = () => {

  const router = useRouter()

  /* eslint-disable */
  useEffect(() => {
    router.push('/the-loai'); // Redirect về trang chủ
  }, []);
  /* eslint-enable */

  return (
    <>
      <Title title="Trang chủ" />
      <HomeContainer />
    </>
  )
}

export default memo(HomePage)
