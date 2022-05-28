import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IBlockHero } from '../../interfaces/blocks'
import { Block } from '../../enums/blocks'

export default function BlockHeroBlock() {
  const ctx = useContext(PageProvider)
  if (ctx && !ctx.page.blocks) return

  const blocks = ctx?.page.blocks
  let data: IBlockHero | null = null
  if (blocks && blocks?.length) {
    data = blocks.filter((item) => {
      if (item.slug === Block.BlockHero) {
        return item
      }
    })[0]
  }

  const props: IBlockHero = {
    image: data?.image,
    heading: data?.heading,
    subheading: data?.subheading,
    overlay: true,
  }

  return getComponent<IBlockHero>(Block.BlockHero, props)
}
