import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockLatestBlog from '../../components/theme/plain/BlockLatestBlog'

export default {
  title: 'Blocks/BlockLatestBlog',
  component: BlockLatestBlog,
} as ComponentMeta<typeof BlockLatestBlog>

const Template: ComponentStory<typeof BlockLatestBlog> = (args) => <BlockLatestBlog {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
  heading: 'Latest Blog',
  subheading:
    'Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices.',
  items: [
    {
      id: '1',
      image: {
        url: '/images/intro-home.jpg',
        alt: 'New Branding Agency',
      },
      date: '14 Jan, 2022',
      heading: 'Baileys predicts the mouth-watering treat trends for 2022',
      link: {
        url: '/',
      },
      categories: [
        {
          id: '1',
          name: 'LEADERSHIP',
        },
        {
          id: '2',
          name: 'CORpORATE',
        },
      ],
    },
    {
      id: '2',
      image: {
        url: '/images/intro-home.jpg',
        alt: 'New Branding Agency',
      },
      date: '14 Jan, 2022',
      heading: 'Baileys predicts the mouth-watering treat trends for 2022',
      link: {
        url: '/',
      },
      categories: [
        {
          id: '1',
          name: 'LEADERSHIP',
        },
        {
          id: '2',
          name: 'CORpORATE',
        },
      ],
    },
    {
      id: '3',
      image: {
        url: '/images/intro-home.jpg',
        alt: 'New Branding Agency',
      },
      date: '14 Jan, 2022',
      heading: 'Baileys predicts the mouth-watering treat trends for 2022',
      link: {
        url: '/',
      },
      categories: [
        {
          id: '1',
          name: 'LEADERSHIP',
        },
        {
          id: '2',
          name: 'CORpORATE',
        },
      ],
    },
  ],
}
