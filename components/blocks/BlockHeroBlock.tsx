import { getComponent } from 'components'
import { IBlockHero } from '../../interfaces/blocks'
import { useSelector } from 'react-redux'

import { IStore } from '../../interfaces/redux'
import { Block } from '../../enums/blocks'

export default function BlockHeroBlock() {
  const pageStore = useSelector((state: IStore) => state.pageStore)
  const blocks = pageStore.page.blocks
  const data = blocks.filter((item) => {
    if (item.slug === Block.BlockHero) {
      return item
    }
  })[0]

  const props: IBlockHero = {
    image: data?.image,
    heading: data?.heading,
    subheading: data?.subheading,
    overlay: true,
  }

  return getComponent<IBlockHero>(Block.BlockHero, props)
}
