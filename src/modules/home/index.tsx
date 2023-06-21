import SwipperHome from "@/components/Swiper/Home";
import React, { memo } from "react";

const HomeContainer: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="llg:col-span-8 col-span-12">
          <SwipperHome />
        </div>
        <div className="llg:col-span-4 col-span-12"></div>
      </div>
    </>
  )
}

export default memo(HomeContainer)