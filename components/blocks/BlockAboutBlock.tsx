import { useSelector } from 'react-redux'

import { getComponent } from 'components'
import { IStore } from '../../interfaces/redux'
import { IBlockAbout } from '../../interfaces/blocks'

import { Block } from '../../enums/blocks'

export default function BlockHeaderBlock() {
  const pageStore = useSelector((state: IStore) => state.pageStore)
  const blocks = pageStore.page.blocks
  const data = blocks.filter((item) => {
    if (item.slug === Block.BlockAbout) {
      return item
    }
  })[0]

  if (!data) return

  const props = {
    id: data.id,
    slug: data.slug,
    heading: data.heading as string,
    subheading: data.subheading,
    image: data.image,
  }

  return getComponent<IBlockAbout>(Block.BlockAbout, props)
}
