import Head from "next/head"
import { memo } from "react"

interface Props {
  title?: string,
}

const Title: React.FC<Props> = ({ title = 'Review Phim' }) => {
  return (
    <>
      <Head>
        <title>{title ? title.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Review Phim'}</title>
      </Head>
    </>
  )
}

export default memo(Title)