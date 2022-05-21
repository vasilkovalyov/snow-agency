import React from 'react'

import Container from './Container'
import BlockHeading from './BlockHeading'
import Image from './Image'

import Row from '../plain/Grid/Row'
import Col from '../plain/Grid/Col'

import { HeadingLevel } from '../../../enums/common'
import { IBlockAbout } from '../../../interfaces/blocks'

export default function BlockAbout({ heading, subheading, image }: IBlockAbout) {
  return (
    <section className="block-about">
      <Container>
        <Row justify="center">
          <Col md={8}>
            <BlockHeading
              heading={heading}
              subheading={subheading}
              level={HeadingLevel.H2}
              alignContent="center"
              className="block-about__heading-block"
            />
            {image && image.url ? (
              <div className="block-about__image text-align--center">
                <Image image={image} />
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
