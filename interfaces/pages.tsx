import { Identificator } from '../types/common'
import { IBlockHero } from '../interfaces/blocks'
import { IImage, ISocial } from '../interfaces/common'

export interface ISeo {
  id: Identificator
  title: string
  keywords: string[]
  description: string
}

export interface IField {
  id: Identificator
  heading: string
  subheading: string
  text: string
  image: IImage
  author: string
}

export interface IContentBlock extends Pick<IField, 'heading' | 'subheading' | 'text'> {
  id: Identificator
  slug: string
  items: IField[]
}

export interface IPage {
  page: {
    seo: ISeo
    blockHero?: IBlockHero
    blocks: IContentBlock[]
  }
}

export interface INavigation {
  id?: Identificator
  slug?: string
  title?: string
  pages: {
    id: Identificator
    slug: string
    title: string
  }[]
}

export interface IHeader {
  id?: Identificator
  slug?: string
  image?: IImage | null
  navigation: INavigation
}

export interface IFooter {
  id?: Identificator
  slug: string
  image?: IImage | null
  navigation?: INavigation
  internalLink?: string
  externalLink?: string
  text?: string
  socialsHeading?: string
  socials?: ISocial[]
}
