import type { Meta, StoryObj } from '@storybook/react';

import MobileSearchbar from './MobileSearchbar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MobileSearchbar> = {
  title: 'components/MobileSearchbar',
  component: MobileSearchbar,
//   tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MobileSearchbar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

