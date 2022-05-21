import { getComponent } from 'components'
import { IBlockAbout } from '../interfaces/blocks'

import { Block } from '../enums/blocks'

export default function BlockHeaderBlock() {
  const props = {
    id: 'cl3hjoncu1byg0cmlbwjlvt9r',
    slug: 'blockAbout',
    heading: '',
    subheading: '',
    image: {
      id: 'cl3hhfmt31b6x0elcf1k8q5cx',
      url: 'https://media.graphassets.com/TXJhVSOISvuB92hWYQAV',
    },
  }

  return getComponent<IBlockAbout>(Block.BlockHeader, props)
}
