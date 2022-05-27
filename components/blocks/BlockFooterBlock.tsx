import { useSelector } from 'react-redux'

import { getComponent } from 'components'
import { IStore } from '../../interfaces/redux'
import { IFooter } from '../../interfaces/pages'
import { Block } from '../../enums/blocks'

export default function BlockFooterBlock() {
  const pageStore = useSelector((state: IStore) => state.pageStore)
  const blockFooter = pageStore.page.blockFooter
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
