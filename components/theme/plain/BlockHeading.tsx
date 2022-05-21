import React from 'react'
import Typography from './Typography'
import { HeadingLevel } from '../../../enums/common'
import { HighHeadingType, AlignContentType } from '../../../types/common'
import cn from 'classnames'

export default function BlockHeading({
  heading,
  subheading,
  level = HeadingLevel.H2,
  alignContent,
  className,
}: {
  className?: string
  heading: string
  subheading?: string
  level: HighHeadingType
  alignContent?: AlignContentType
}) {
  const contentAlign = cn({
    'text-align--center': alignContent === 'center',
    'text-align--right': alignContent === 'right',
  })

  return (
    <div className={`block-heading ${className ? className : ''} ${contentAlign ? contentAlign : ''}`}>
      <Typography level={level} text={heading} />
      {subheading && <Typography text={subheading} />}
    </div>
  )
}
