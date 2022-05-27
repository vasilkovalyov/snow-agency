import { useSelector } from 'react-redux'

import { getComponent } from 'components'
import { IStore } from '../../interfaces/redux'
import { IHeader } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'

export default function BlockHeaderBlock() {
  const pageStore = useSelector((state: IStore) => state.pageStore)
  const blockHeader = pageStore.page.blockHeader
  const props: IHeader = {
    id: blockHeader.id,
    slug: blockHeader.slug,
    image: blockHeader.image,
    navigation: blockHeader.navigation,
  }

  return getComponent<IHeader>(Block.BlockHeader, props)
}
