import { getComponent } from 'components'
import { IBlockIntroBanner } from '../interfaces/blocks'

import { Block } from '../enums/blocks'

export default function BlockIntroBannerBlock() {
  const props = {
    image: {
      id: '1',
      url: '/images/intro-home.jpg',
      alt: 'alt description',
    },
    heading: 'About',
    overlay: true,
  }

  return getComponent<IBlockIntroBanner>(Block.BlockIntroBanner, props)
}
