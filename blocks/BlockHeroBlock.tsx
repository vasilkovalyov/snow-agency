import { getComponent } from 'components'
import { IBlockHero } from '../interfaces/blocks'
import { useSelector } from 'react-redux'

import { IStore } from '../interfaces/redux'
import { Block } from '../enums/blocks'

export default function BlockHeroBlock() {
  const blocks = useSelector((state: IStore) => state.pageStore.page.blocks)
  let blockHero: IBlockHero | null
  if (blocks.length) {
    const data = blocks.filter((item) => {
      if (item.slug === Block.BlockHero) {
        return item
      }
    })[0]
    blockHero = data && null
  }
  // let dataBySlug = null
  // if (data.data.blocks) {
  //   const section = data.data.blocks.filter((item) => {
  //     if (item.slug === 'blockHero') {
  //       return item
  //     }
  //   })
  //   dataBySlug = section[0]
  // }
  const props: IBlockHero = {
    image: {
      id: '1',
      url: '/images/intro-home.jpg',
      alt: 'alt description',
    },
    heading: {
      html: '<h1>We are about to change the way <br> <i>you publish on the web</i></h1>',
    },
    subheading: 'NEW BRANDING AGENCY',
    // image: blockHero?.image,
    // heading: blockHero?.heading,
    // subheading: blockHero?.subheading,
    overlay: true,
  }

  return getComponent<IBlockHero>(Block.BlockHero, props)
}
