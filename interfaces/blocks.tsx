import { IImage, ITestimonial, IPost, IProject, IBenefit } from './common'
import { RichTextType } from '../types/common'
import { Block } from '../enums/blocks'

export interface IBlockHero {
  image?: IImage | null
  heading?: string | RichTextType
  subheading?: string
  overlay?: boolean | null
}

export interface IBlockIntroBanner {
  slug?: string
  image: IImage
  heading?: string | RichTextType
  overlay?: boolean | null
}

export interface IBlockTestimonial {
  items: ITestimonial[]
  className?: string
}

export interface IBlockLatestBlog {
  heading: string
  subheading?: string
  items: IPost[]
  className?: string
}

export interface IBlockBenefits {
  items: IBenefit[]
}

export interface IBlockAbout {
  slug: string
  heading: string
  subheading: string
  richText?: string | RichTextType
  image?: IImage | null
}

export interface IBlockProjects {
  heading: string
  subheading?: string
  items: IProject[]
  className?: string
}

export interface IBlockProps {
  contentType: Block
}

export type IRegistryItem = {
  contentType: Block
  component: any
}
