import React from 'react'
import { IImageCompnent } from '../../../interfaces/common'

export default function Image({ image, className }: IImageCompnent) {
  return (
    <div className={`image-block ${className ? className : ''}`}>
      <img
        src={image.url}
        alt={image.alt && 'image description'}
        width={image.width && ''}
        height={image.height && ''}
        className="image-block__image"
      />
    </div>
  )
}
