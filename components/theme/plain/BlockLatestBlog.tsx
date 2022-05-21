import React from 'react'

import Container from './Container'
import Post from './Post'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'

import { HeadingLevel } from '../../../enums/common'
import { IBlockLatestBlog } from '../../../interfaces/blocks'

export default function BlockLatestBlog({ className, items, heading, subheading }: IBlockLatestBlog) {
  return (
    <section className={`block-latest-blog ${className ? className : ''}`}>
      <Container className="block-latest-blog__container">
        <Row justify="center">
          <Col sm={8}>
            <BlockHeading
              heading={heading}
              level={HeadingLevel.H2}
              subheading={subheading}
              alignContent="center"
              className="block-latest-blog__heading-block"
            />
          </Col>
        </Row>
        <Row className="block-latest-blog__row">
          {items.map((item) => (
            <Col key={item.id} className="block-latest-blog__col" sm={4}>
              <Post {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
