import React from 'react'

import Container from './Container'

import { IBlockTestimonial } from '../../../interfaces/blocks'
import Testimonial from './Testimonial'

export default function BlockTestimonials({ className, items }: IBlockTestimonial) {
  return (
    <section className={`block-testimonials ${className ? className : ''}`}>
      <Container containerWidth="medium" className="block-testimonials__container">
        {items.map((item) => (
          <Testimonial key={item.id} author={item.author} text={item.text} />
        ))}
      </Container>
    </section>
  )
}
