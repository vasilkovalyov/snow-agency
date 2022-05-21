import React from 'react'

import Image from './Image'
import Typography from './Typography'
import Container from './Container'

import { IBlockHero } from '../../../interfaces/blocks'

function BlockHero({ image, heading, subheading, overlay = true }: IBlockHero) {
  return (
    <section className="block-hero">
      {overlay && <div className="image-absolute-overlay"></div>}
      <Image image={image} className="block-hero__bg-image image-absolute-fill" />
      <Container className="block-hero__container text-align--center">
        {subheading && <Typography text={subheading} className="block-hero__subheading text-uppercase color-white" />}
        <div dangerouslySetInnerHTML={{ __html: heading.html }} className="block-hero__heading text-uppercase"></div>
      </Container>
    </section>
  )
}

export default BlockHero
