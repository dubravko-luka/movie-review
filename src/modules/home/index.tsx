import Evaluate from "@/components/Evaluate";
import SwipperHome from "@/components/Swiper/HomeBanner";
import React, { memo } from "react";
import Sections from "./sections";

const HomeContainer: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-0">
        <div className="x;:col-span-9 llg:col-span-8 p-7 border-r border-bd-255 col-span-12">
          <SwipperHome />
          <div className="mt-3">
            <Sections />
          </div>
        </div>
        <div className="xl:col-span-3 llg:col-span-4 p-7 col-span-12">
          <Evaluate />
        </div>
      </div>
    </>
  )
}

export default memo(HomeContainer)