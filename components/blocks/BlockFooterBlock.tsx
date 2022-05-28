import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IFooter } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'

export default function BlockFooterBlock() {
  const ctx = useContext(PageProvider)
  if (ctx && !ctx.page.blockHeader) return

  const blockFooter: IFooter | undefined = ctx?.page.blockFooter
  if (!blockFooter) return

  const props: IFooter = {
    id: blockFooter.id,
    slug: blockFooter.slug,
    image: blockFooter.image,
    navigation: blockFooter.navigation,
    text: blockFooter.text,
    socialsHeading: blockFooter.socialsHeading,
    socials: blockFooter.socials,
  }

  return getComponent<IFooter>(Block.BlockFooter, props)
}
