import {Meta, StoryObj} from '@storybook/react'
import { Form } from './Form'

export default {
  component: Form,
  args: {name: 'taro'}
} as Meta

type Story = StoryObj<typeof Form> 

export const Default:Story = {}