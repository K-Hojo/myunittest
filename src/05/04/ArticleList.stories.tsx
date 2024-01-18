import { Meta, StoryObj } from "@storybook/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

export default {
  component: ArticleList,
} as Meta;

type Story = StoryObj<typeof ArticleList>;

export const Default: Story = { args: { items } };

export const NoItems: Story = { args: { items: [] } };
