import React, { memo } from "react";
import NationContainer from "@/modules/nation/list";
import Title from "@/components/Head/title";
import { useRouter } from 'next/router';

const NationPage: React.FC = () => {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Title title={`${slug ?? 'Review Phim'} | Review Phim`} />
      <NationContainer />
    </>
  )
}

export default memo(NationPage)
