import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockProjects from '../../components/theme/plain/BlockProjects'

export default {
  title: 'Blocks/BlockProjects',
  component: BlockProjects,
} as ComponentMeta<typeof BlockProjects>

const Template: ComponentStory<typeof BlockProjects> = (args) => <BlockProjects {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
  heading: 'Best Projects',
  subheading:
    'Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices.',
  items: [
    {
      id: '1',
      image: {
        url: '/images/intro-home.jpg',
        alt: 'New Branding Agency',
      },
      heading: 'Vinyl Record',
      category: 'Mockup',
      link: {
        url: '/',
      },
    },
    {
      id: '2',
      image: {
        url: '/images/intro-home.jpg',
        alt: 'New Branding Agency',
      },
      heading: 'Modern T-Shirt',
      category: 'Print',
      link: {
        url: '/',
      },
    },
    {
      id: '3',
      image: {
        url: '/images/intro-home.jpg',
        alt: 'New Branding Agency',
      },
      heading: 'Minimal Bag',
      category: 'Branding',
      link: {
        url: '/',
      },
    },
  ],
}
