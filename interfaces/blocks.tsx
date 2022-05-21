import { IImage, ITestimonial, IPost, IProject, IBenefit } from './common'
import { Block } from '../enums/blocks'

export interface IBlockHero {
  image: IImage
  heading: {
    html: string
  }
  subheading?: string
  overlay: boolean
}

export interface IBlockIntroBanner {
  slug?: string
  image: IImage
  heading?: string
  overlay: boolean
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
  richText?: string
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
