import React, { memo } from "react";
import { ReactSVG } from 'react-svg'

type Props = {
  name: string;
  class?: string;
}

const Svg: React.FC<Props> = (props) => {
  return (
    <div className={`${props.class ?? ''}`}>
      <ReactSVG src={`/images/svg/${props.name}.svg`} />
    </div>
  )
}

export default memo(Svg)