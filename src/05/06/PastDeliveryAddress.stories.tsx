import { Meta, StoryObj } from "@storybook/react";
import { PastDeliveryAddress } from "./PastDeliveryAddress";
import { deliveryAddresses } from "./fixtures";

export default {
  component: PastDeliveryAddress,
  args: { options: deliveryAddresses },
} as Meta;

type Story = StoryObj<typeof PastDeliveryAddress>;

export const Disabled: Story = {
  name: "不活性",
  args: { disabled: true },
};

export const Enabled: Story = {
  name: "活性",
  args: { disabled: false },
};
