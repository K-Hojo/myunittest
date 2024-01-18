import { Meta, StoryObj } from "@storybook/react";
import { RegisterDeliveryAddress } from "./RegisterDeliveryAddress";

export default {
  component: RegisterDeliveryAddress,
  args: { onChange: (flag: boolean) => console.log(flag) },
} as Meta;

type Story = StoryObj<typeof RegisterDeliveryAddress>;

export const Default: Story = {};
