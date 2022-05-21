import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Post from '../../components/theme/plain/Post'

export default {
  title: 'Components/Post',
  component: Post,
} as ComponentMeta<typeof Post>

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />

export const Default = Template.bind({})
Default.args = {
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
}
