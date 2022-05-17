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
  title: 'Heading',
  text: 'Lorem ipsum dolor',
  image: '/images/img.png',
}
