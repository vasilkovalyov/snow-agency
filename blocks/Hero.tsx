import React from 'react'

type ImageType = {
  id: string
  url: string
}

interface IHero {
  image: ImageType
  heading: string
  subheading: string
}

function Hero({ image, heading, subheading }: IHero) {
  return (
    <section className="section-hero">
      <div className="container">
        <img src={image.url} alt={heading} />
        <p className="section-hero__subheading">{subheading}</p>
        <div dangerouslySetInnerHTML={{ __html: heading }}></div>
      </div>
    </section>
  )
}

export default Hero
