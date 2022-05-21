import { getComponent } from 'components'
import { IBlockHero } from '../interfaces/blocks'

import { Block } from '../enums/blocks'

export default function BlockHeroBlock() {
  const props = {
    image: {
      id: '1',
      url: '/images/intro-home.jpg',
      alt: 'alt description',
    },
    heading: {
      html: '<h1>We are about to change the way <br> <i>you publish on the web</i></h1>',
    },
    subheading: 'NEW BRANDING AGENCY',
    overlay: true,
  }

  return getComponent<IBlockHero>(Block.BlockHero, props)
}
