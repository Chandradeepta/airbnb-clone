import type { Meta, StoryObj } from "@storybook/react";

import SearchIcon from "./SearchIcon";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SearchIcon> = {
  title: "components/SearchIcon",
  component: SearchIcon,
  //   tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
export const Extended: Story = {
  args: {
    isExtended: true,
  },
};
