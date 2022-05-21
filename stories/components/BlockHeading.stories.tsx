import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlockHeading from '../../components/theme/plain/BlockHeading'

export default {
  title: 'Components/BlockHeading',
  component: BlockHeading,
} as ComponentMeta<typeof BlockHeading>

const Template: ComponentStory<typeof BlockHeading> = (args) => <BlockHeading {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: 'Heading',
  subheading: 'lorem ipsum dolor amen',
}
