import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";
import {deliveryAddresses} from './fixtures'

export default {
  component: Form
} as Meta

type Story = StoryObj<typeof Form>

export const NoDeliveryAddresses:Story = {
  name: '過去のお届け先がない場合',
  args: {deliveryAddresses: []}
}

export const HasDeliveryAddresses:Story = {
  name: '過去のお届け先がある場合',
  args: { deliveryAddresses }
}