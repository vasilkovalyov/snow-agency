import React from 'react'

import Image from './Image'
import Typography from './Typography'
import Container from './Container'
import { RichTextType } from '../../../types/common'

import { IBlockHero } from '../../../interfaces/blocks'

function BlockHero({ image, heading, subheading, overlay = true }: IBlockHero) {
  return (
    <section className="block-hero">
      {overlay && <div className="image-absolute-overlay"></div>}
      {image && image.url ? <Image image={image} className="block-hero__bg-image image-absolute-fill" /> : null}
      <Container className="block-hero__container text-align--center">
        {subheading && <Typography text={subheading} className="block-hero__subheading text-uppercase color-white" />}
        {heading && heading.html ? (
          <div dangerouslySetInnerHTML={{ __html: heading.html }} className="block-hero__heading text-uppercase"></div>
        ) : null}
      </Container>
    </section>
  )
}

export default BlockHero
