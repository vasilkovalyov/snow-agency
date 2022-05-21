import React from 'react'

import Container from './Container'
import Row from './Grid/Row'
import Col from './Grid/Col'
import Image from './Image'

import { IBlockBenefits } from '../../../interfaces/blocks'

export default function BlockBenefit({ items }: IBlockBenefits) {
  return (
    <section className="block-benefits">
      <Container>
        <Row>
          {items.map((benefit) => (
            <Col key={benefit.id} sm={6} md={3}>
              <div className="benefit">
                <div className="benefit__icon">
                  {benefit && benefit.image?.url ? (
                    <Image
                      image={{
                        url: benefit.image.url,
                        alt: benefit.heading,
                      }}
                    />
                  ) : null}
                </div>
                <div className="benefit__body">
                  <p className="benefit__count font-semibold">{benefit.subheading}</p>
                  <p className="benefit__heading text-uppercase font-semibold">{benefit.heading}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
