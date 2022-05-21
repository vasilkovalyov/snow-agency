import React from 'react'
import BlockHeaderBlock from '../blocks/BlockHeaderBlock'
import BlockFooterBlock from '../blocks/BlockFooterBlock'
import BlockHeroBlock from '../blocks/BlockHeroBlock'
import BlockBenefitBlock from '../blocks/BlockBenefitBlock'
import BlockTestimonialBlock from '../blocks/BlockTestimonialBlock'
import BlockIntroBannerBlock from '../blocks/BlockIntroBannerBlock'
import BlockAboutBlock from '../blocks/BlockAboutBlock'

import plainThemeComponents from './theme/plain'
import { IRegistryItem } from '../interfaces/blocks'

import { Block } from '../enums/blocks'
import { IContentBlock } from '../interfaces/pages'

export const blockComponents = {
  [Block.BlockHeader]: BlockHeaderBlock,
  [Block.BlockFooter]: BlockFooterBlock,
  [Block.BlockHero]: BlockHeroBlock,
  [Block.BlockBenefit]: BlockBenefitBlock,
  [Block.BlockTestimonial]: BlockTestimonialBlock,
  [Block.BlockIntroBanner]: BlockIntroBannerBlock,
  [Block.BlockAbout]: BlockAboutBlock,
}

const registeredComponents: { [theme: string]: IRegistryItem[] } = {
  plain: plainThemeComponents,
}

export function renderBlocks(blocks: IContentBlock[] = []) {
  return blocks.map((blockContent, index) => renderBlock(blockContent.slug as Block, index))
}

export function renderBlock(contentType: Block, index?: number) {
  const Component = contentType ? blockComponents[contentType] : null
  const byContentType = registeredComponents['plain']?.filter((c) => c.contentType === contentType)
  if (!Component) return null
  return <Component key={index} contentType={byContentType} />
}

export function getComponent<T>(contentType: Block, props: T) {
  let Component: React.ComponentType | null = null
  const byContentType = registeredComponents['plain']?.filter((c) => c.contentType === contentType)
  Component = byContentType[0].component

  if (!Component) return null
  return <Component {...props} />
}

export function renderByContentType(contentType: Block) {
  const Component = blockComponents[contentType] || null
  if (!Component) return null
  return <Component contentType={contentType} />
}
