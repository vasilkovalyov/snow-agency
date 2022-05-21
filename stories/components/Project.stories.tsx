import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Project from '../../components/theme/plain/Project'
import { EnumsIcon } from '../../enums/common'

export default {
  title: 'Components/Project',
  component: Project,
  argTypes: {
    icon: {
      options: EnumsIcon,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Project>

const Template: ComponentStory<typeof Project> = (args) => <Project {...args} />

export const Default = Template.bind({})
Default.args = {
  id: '1',
  image: {
    url: '/images/intro-home.jpg',
    alt: 'Vinyl Record',
  },
  heading: 'Vinyl Record',
  category: 'Mockup',
  link: {
    url: '/',
  },
}
