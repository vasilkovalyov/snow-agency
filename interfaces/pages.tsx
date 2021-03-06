import { Identificator, RichTextType } from '../types/common'
import { IBlockHero } from '../interfaces/blocks'
import { IImage, ISocial } from '../interfaces/common'

export interface ISeo {
  id?: Identificator
  title: string
  keywords: string[]
  description: string
}

export interface IField {
  id: Identificator
  heading: string | RichTextType
  subheading: string
  text: string
  image: IImage
  author: string
}

export interface IContentBlock extends Pick<IField, 'heading' | 'subheading' | 'text' | 'image'> {
  id: Identificator
  slug: string
  overlay?: false | null
  items: IField[]
}

export interface IPage {
  id?: Identificator
  slug: string
  title?: string
  seo: ISeo
  blocks: IContentBlock[]
  blockHeader: IHeader
  blockFooter: IFooter
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
