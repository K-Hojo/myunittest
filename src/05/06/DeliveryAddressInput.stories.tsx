import { Meta, StoryObj } from "@storybook/react";
import { DeliveryAddressInput } from "./DeliveryAddressInput";

export default {
  component: DeliveryAddressInput,
} as Meta;

type Story = StoryObj<typeof DeliveryAddressInput>;

export const NoDeliveryAddress: Story = {
  name: "お届け先",
  args: { title: undefined },
};

export const WithDeliveryAddress: Story = {
  name: "新しいお届け先",
  args: { title: "新しいお届け先" },
};
