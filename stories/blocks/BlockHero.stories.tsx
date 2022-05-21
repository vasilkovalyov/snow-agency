import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockHero from '../../components/theme/plain/BlockHero'

export default {
  title: 'Blocks/BlockHero',
  component: BlockHero,
} as ComponentMeta<typeof BlockHero>

const Template: ComponentStory<typeof BlockHero> = (args) => <BlockHero {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: {
    html: `<h1>We are about to change the way
    <br>
    <em>you publish on the web</em></h1>`,
  },
  subheading: 'New Branding Agency',
  image: {
    url: '/images/intro-home.jpg',
    alt: 'New Branding Agency',
  },
  overlay: true,
}
