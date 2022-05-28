import { useContext } from 'react'
import { PageProvider } from '../../context/project'

import { getComponent } from 'components'
import { IHeader } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'

export default function BlockHeaderBlock() {
  const ctx = useContext(PageProvider)
  if (ctx && !ctx.page.blockHeader) return

  const blockHeader: IHeader | undefined = ctx?.page.blockHeader
  if (!blockHeader) return

  const props: IHeader = {
    id: blockHeader.id,
    slug: blockHeader.slug,
    image: blockHeader.image,
    navigation: blockHeader.navigation,
  }

  return getComponent<IHeader>(Block.BlockHeader, props)
}
