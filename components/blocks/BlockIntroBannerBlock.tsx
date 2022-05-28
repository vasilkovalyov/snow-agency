import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IBlockIntroBanner } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockIntroBannerBlock() {
  const ctx = useContext(PageProvider)
  if (ctx && !ctx.page.blocks) return

  const blocks = ctx?.page.blocks
  let data: IBlockIntroBanner | null = null
  if (blocks && blocks?.length) {
    data = blocks.filter((item) => {
      if (item.slug === Block.BlockIntroBanner) {
        return item
      }
    })[0]
  }

  if (!data) return

  const props: IBlockIntroBanner = {
    slug: data.slug,
    image: data.image,
    heading: data.heading,
    overlay: true,
  }

  return getComponent<IBlockIntroBanner>(Block.BlockIntroBanner, props)
}
