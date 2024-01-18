import { Meta, StoryObj } from "@storybook/react";
import { DeliveryAddressWithPastAddress } from "./DeliveryAddressWithPastAddress";
import { deliveryAddresses } from "./fixtures";

export default {
  component: DeliveryAddressWithPastAddress,
  args: { options: deliveryAddresses },
} as Meta;

type Story = StoryObj<typeof DeliveryAddressWithPastAddress>;

export const Default: Story = {};
