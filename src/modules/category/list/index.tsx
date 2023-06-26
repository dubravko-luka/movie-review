import { getVideoId } from "@/api/endpoints/video";
import React, { memo, useEffect, useState } from "react";

const CategoryContainer: React.FC = () => {


  const [videoUrl, setVideoUrl] = useState('')

  const _getVideo = async () => {
    await getVideoId('199Z0uhupTWyS2Gik8qqGHGj_dkr6_hd-').then((res: string) => {
      setVideoUrl(res)
    })
  }

  useEffect(() => {
    _getVideo()
  }, [])

  return (
    <>
      <iframe src={videoUrl} width="640" height="480">

      </iframe>
    </>
  )
}

export default memo(CategoryContainer)