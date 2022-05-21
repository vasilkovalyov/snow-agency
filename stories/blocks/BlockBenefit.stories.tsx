import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockBenefit from '../../components/theme/plain/BlockBenefit'

export default {
  title: 'Blocks/BlockBenefit',
  component: BlockBenefit,
} as ComponentMeta<typeof BlockBenefit>

const Template: ComponentStory<typeof BlockBenefit> = (args) => <BlockBenefit {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      id: '1',
      heading: 'Projects Completed',
      count: '548',
      image: {
        id: '1',
        url: '/icons/portfolio-white.svg',
        alt: 'alt',
      },
    },

    {
      id: '2',
      heading: 'WORKING HOURS',
      count: '1465',
      image: {
        id: '1',
        url: '/icons/hour-white.svg',
        alt: 'alt',
      },
    },
    {
      id: '3',
      heading: 'POSITIVE FEEDBACKS',
      count: '612',
      image: {
        id: '1',
        url: '/icons/feedback-white.svg',
        alt: 'alt',
      },
    },
    {
      id: '4',
      heading: 'HAPPY CLIENTS',
      count: '735',
      image: {
        id: '1',
        url: '/icons/clients-white.svg',
        alt: 'alt',
      },
    },
  ],
}
