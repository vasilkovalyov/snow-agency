import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IBlockAbout } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockAboutBlock() {
  const ctx = useContext(PageProvider)
  if (ctx && !ctx.page.blocks) return

  const blocks = ctx?.page.blocks
  let data: IBlockAbout | null = null
  if (blocks && blocks?.length) {
    data = blocks.filter((item) => {
      if (item.slug === Block.BlockAbout) {
        return {
          ...item,
          heading: item.heading as string,
        }
      }
    })[0]
  }

  if (!data) return

  const props = {
    slug: data.slug,
    heading: data.heading as string,
    subheading: data.subheading,
    image: data.image,
  }

  return getComponent<IBlockAbout>(Block.BlockAbout, props)
}
