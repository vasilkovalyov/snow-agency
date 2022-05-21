import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockAbout from '../../components/theme/plain/BlockAbout'

export default {
  title: 'Blocks/BlockAbout',
  component: BlockAbout,
} as ComponentMeta<typeof BlockAbout>

const Template: ComponentStory<typeof BlockAbout> = (args) => <BlockAbout {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: 'About Our Agency',
  subheading:
    'We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps. Clever use of technology and lean processes enable us to work faster and smarter.',
  image: {
    url: '/images/signature.png',
    alt: 'signature',
  },
}
