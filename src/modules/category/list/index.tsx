// import { getVideoId } from "@/api/endpoints/video";
// import React, { memo, useEffect, useState } from "react";

// const CategoryContainer: React.FC = () => {


//   const [videoUrl, setVideoUrl] = useState('')

//   const _getVideo = async () => {
//     await getVideoId('1eQthSYbeio8wq7Pm_CQ9GVaFIrJldj7P').then((res: string) => {
//       setVideoUrl(res)
//     })
//   }

//   useEffect(() => {
//     _getVideo()
//   }, [])

//   return (
//     <>
//       Category List
//       <video controls>
//         <source src={videoUrl} type="video/mp4" />
//       </video>
//     </>
//   )
// }

// export default memo(CategoryContainer)

import { useEffect, useState } from 'react';
import axios from 'axios';

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const getVideoUrl = async () => {
      try {
        const fileId = '1eQthSYbeio8wq7Pm_CQ9GVaFIrJldj7P';

        const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink`, {
          headers: {
            Authorization: 'Bearer ya29.a0AWY7Ckl984R7hWtkxya6EcvXE902jeZReStetK1_XTOi8y0qWskXce7SyCBSeWVxWbMLL0I_KLgfIu2W27kSGtXwiDuAhPjRuM7SEUN_EoxmUZlKc9eovDNLVLOUN9ZyVrqdd2BX_r_bJS189s8Th3661zDdYIMjaCgYKAS0SARASFQG1tDrph9UYpb66KWzy_EeoAGmUZw0167',
          },
        });

        const videoUrl = response.data.webViewLink;

        setVideoUrl(videoUrl);
      } catch (error) {
        console.error('Error getting video URL:', error);
      }
    };

    getVideoUrl();
  }, []);

  return (
    <div>
      {videoUrl && (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
