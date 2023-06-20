import React, { memo } from "react";
import NationContainer from "@/modules/nation";
import Title from "@/components/Head/title";

const NationPage: React.FC = () => {

  return (
    <>
      <Title title="Quốc Gia" />
      <NationContainer />
    </>
  )
}

export default memo(NationPage)
