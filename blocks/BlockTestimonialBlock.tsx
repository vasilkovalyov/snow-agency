import { getComponent } from 'components'
import { IBlockTestimonial } from '../interfaces/blocks'

import { Block } from '../enums/blocks'

export default function BlockTestimonialBlock() {
  const props = {
    items: [
      {
        id: 'cl3btsz7j3bo00cmk8qzfp9y1',
        author: 'Michael Hopkins',
        text: 'Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.',
      },
      {
        id: 'cl3btsz7j3bo00cmk8qzfp9y2',
        author: 'Michael Hopkins',
        text: 'Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.',
      },
    ],
  }

  return getComponent<IBlockTestimonial>(Block.BlockTestimonial, props)
}
