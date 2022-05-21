import { getComponent } from 'components'
import { IHeader } from '../interfaces/pages'

import { Block } from '../enums/blocks'

export default function BlockHeaderBlock() {
  const props = {
    id: 'cl3hjoncu1byg0cmlbwjlvt9r',
    slug: 'blockHeader',
    image: {
      id: 'cl3hhfmt31b6x0elcf1k8q5cx',
      url: 'https://media.graphassets.com/TXJhVSOISvuB92hWYQAV',
    },
    navigation: {
      id: 'cl3acugwq0dw50amhyih4wm7h',
      pages: [
        {
          id: 'cl3af7vzt0gl10cmkvpgmd26i',
          slug: 'home',
          title: 'Home',
        },
        {
          id: 'cl3aeqteu0fab0amni5m5ay6l',
          slug: 'about',
          title: 'About',
        },
      ],
      slug: 'primaryNavigation',
      title: 'Primary Navigation',
    },
  }

  return getComponent<IHeader>(Block.BlockHeader, props)
}
