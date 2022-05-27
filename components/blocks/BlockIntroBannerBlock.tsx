import { useSelector } from 'react-redux'

import { getComponent } from 'components'
import { IStore } from '../../interfaces/redux'
import { IBlockIntroBanner } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockIntroBannerBlock() {
  const pageStore = useSelector((state: IStore) => state.pageStore)
  const blocks = pageStore.page.blocks
  const data = blocks.filter((item) => {
    if (item.slug === Block.BlockIntroBanner) {
      return item
    }
  })[0]

  const props: IBlockIntroBanner = {
    slug: data.slug,
    image: data.image,
    heading: data.heading,
    overlay: true,
  }

  return getComponent<IBlockIntroBanner>(Block.BlockIntroBanner, props)
}
