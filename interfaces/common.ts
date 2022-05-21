import {
  Identificator,
  IconType,
  DateType,
  PostViewType,
  OrientType,
  GridSizes,
  ColSize,
  GridItemsAlignment,
  GridJustify,
} from '../types/common'
import { HeadingLevel, EnumsIcon } from '../enums/common'

export interface IImage {
  id?: Identificator
  url: string
  alt?: string
  width?: number
  height?: number
}

export interface IImageCompnent {
  image: IImage
  className?: string
}

export interface ITypography {
  level?: HeadingLevel
  className?: string
  text: string
}

export interface ILink {
  text?: string
  url: string
  target?: string
}

export interface IIcon {
  className?: string
  icon: IconType
}

export interface ICategory {
  id: Identificator
  name: string
}

export interface ICategoryComponent {
  className?: string
  type?: OrientType
  items?: ICategory[]
}

export interface IPost {
  id?: Identificator
  image?: IImage
  date: DateType
  heading: string
  categories?: ICategory[]
  view: PostViewType
  link: ILink
}

export interface IProject {
  id?: Identificator
  image?: IImage
  heading: string
  category: string
  link: ILink
}

export interface ITestimonial {
  id?: Identificator
  author: string
  text: string
}

export interface IRow {
  alignItems?: GridItemsAlignment
  justify?: GridJustify
  children: React.ReactNode
  className?: string
}

export interface ICol {
  base?: ColSize | null
  sm?: ColSize | null
  md?: ColSize | null
  lg?: ColSize | null
  xl?: ColSize | null
  children: React.ReactNode
  className?: string
}

export interface IBenefit {
  id: Identificator
  heading: string
  subheading: string
  image?: IImage | null
}

export interface ISocial {
  id: Identificator
  heading: string
  socialIcon: EnumsIcon
  externalLink: string
}
