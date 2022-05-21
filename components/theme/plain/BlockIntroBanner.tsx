import React from 'react'

import Image from './Image'
import Typography from './Typography'
import Container from './Container'

import { HeadingLevel } from '../../../enums/common'
import { IBlockIntroBanner } from '../../../interfaces/blocks'

function BlockIntroBanner({ image, heading, overlay = true }: IBlockIntroBanner) {
  return (
    <section className="block-intro-banner">
      {overlay && <div className="image-absolute-overlay"></div>}
      <Image image={image} className="block-intro-banner__bg-image image-absolute-fill" />
      <Container className="block-intro-banner__container text-align--center">
        {heading && (
          <Typography
            text={heading}
            level={HeadingLevel.H1}
            className="block-intro-banner__heading text-uppercase color-white"
          />
        )}
      </Container>
    </section>
  )
}

export default BlockIntroBanner
