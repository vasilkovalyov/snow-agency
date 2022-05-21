import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockTestimonial from '../../components/theme/plain/BlockTestimonial'

export default {
  title: 'Blocks/BlockTestimonials',
  component: BlockTestimonial,
} as ComponentMeta<typeof BlockTestimonial>

const Template: ComponentStory<typeof BlockTestimonial> = (args) => <BlockTestimonial {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
  items: [
    {
      id: '1',
      author: 'Michael Hopkins',
      text: 'Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.',
    },
    {
      id: '2',
      author: 'Michael Hopkins',
      text: 'Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.',
    },
    {
      id: '3',
      author: 'Michael Hopkins',
      text: 'Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.',
    },
  ],
}
