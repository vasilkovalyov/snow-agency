import { Block } from '../../../enums/blocks'
import { IRegistryItem } from '../../../interfaces/blocks'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import BlockHero from './BlockHero'
import BlockBenefit from './BlockBenefit'
import BlockTestimonial from './BlockTestimonial'
import BlockIntroBanner from './BlockIntroBanner'
import BlockAbout from './BlockAbout'

const components: IRegistryItem[] = [
  {
    contentType: Block.BlockHeader,
    component: Header,
  },
  {
    contentType: Block.BlockFooter,
    component: Footer,
  },
  {
    contentType: Block.BlockHero,
    component: BlockHero,
  },
  {
    contentType: Block.BlockBenefit,
    component: BlockBenefit,
  },
  {
    contentType: Block.BlockTestimonial,
    component: BlockTestimonial,
  },
  {
    contentType: Block.BlockIntroBanner,
    component: BlockIntroBanner,
  },
  {
    contentType: Block.BlockAbout,
    component: BlockAbout,
  },
]

export default components
