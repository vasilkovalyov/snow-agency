import { getComponent } from 'components'
import { IFooter } from '../interfaces/pages'

import { Block } from '../enums/blocks'
import { EnumsIcon } from '../enums/common'

export default function BlockFooterBlock() {
  const props = {
    slug: 'blockFooter',
    image: {
      id: 'cl3hhfmt31b6x0elcf1k8q5cx',
      url: 'https://media.graphassets.com/TXJhVSOISvuB92hWYQAV',
    },
    navigation: {
      id: 'cl3acugwq0dw50amhyih4wm7h',
      slug: 'primaryNavigation',
      title: 'Primary Navigation',
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
    },
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam debitis odit, quos temporibus possimus iure?',
    socialsHeading: 'Follow us',
    socials: [
      {
        externalLink: 'https://www.instagram.com/',
        heading: 'Instagram',
        id: 'cl3aclyi10eab0cmkk2748q3n',
        socialIcon: 'instagram' as EnumsIcon,
      },
      {
        externalLink: 'https://www.facebook.com/',
        heading: 'Facebook',
        id: 'cl3acnwz20edm0cmke7wb9pdj',
        socialIcon: 'facebook' as EnumsIcon,
      },
      {
        externalLink: 'https://www.linkedin.com/',
        heading: 'LinkedIn',
        id: 'cl3acoksp0dc70amn82zjoqwf',
        socialIcon: 'linkedin' as EnumsIcon,
      },
      {
        externalLink: 'https://twitter.com/',
        heading: 'Twitter',
        id: 'cl3acpc5a0eep0cmkxxp2la78',
        socialIcon: 'twitter' as EnumsIcon,
      },
    ],
  }

  return getComponent<IFooter>(Block.BlockFooter, props)
}
