import Evaluate from "@/components/Evaluate";
import React, { memo } from "react";
import Sections from "@/components/Sections/Category-Slug";

const CategoryContainer: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-0 border-b border-bd-255">
        <div className="xl:col-span-9 llg:col-span-8 p-7 border-r border-bd-255 col-span-12 pb-5">
          <p className="text-3xl font-bold text-center text-white mt-5 mb-10">Phim Chiếu Rạp</p>
          <div className="mt-3">
            <Sections />
          </div>
        </div>
        <div className="xl:col-span-3 llg:col-span-4 p-7 col-span-12 pb-5">
          <Evaluate />
        </div>
      </div>
    </>
  )
}

export default memo(CategoryContainer)