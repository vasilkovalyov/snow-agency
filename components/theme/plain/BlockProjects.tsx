import React from 'react'

import Container from './Container'
import Project from './Project'
import BlockHeading from './BlockHeading'
import Row from './Grid/Row'
import Col from './Grid/Col'

import { HeadingLevel } from '../../../enums/common'
import { IBlockProjects } from '../../../interfaces/blocks'

export default function BlockProjects({ className, items, heading, subheading }: IBlockProjects) {
  return (
    <section className={`block-projects ${className ? className : ''}`}>
      <Container className="block-projects__container">
        <Row justify="center" className="block-projects__row">
          <Col sm={8}>
            <BlockHeading
              heading={heading}
              level={HeadingLevel.H2}
              subheading={subheading}
              alignContent="center"
              className="block-projects__heading-block"
            />
          </Col>
        </Row>
        <Row className="block-projects__row">
          {items.map((item) => (
            <Col key={item.id} className="block-projects__col" sm={4}>
              <Project {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
