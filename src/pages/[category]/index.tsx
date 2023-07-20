import { AppRoutes } from '@/utils/routes';
import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';

const Category: React.FC = () => {

  const router = useRouter()

  useEffect(() => {
    router.push(AppRoutes?.home)
  }, [])

  return (
    <>
      {/*  */}
    </>
  )
}

export default memo(Category)