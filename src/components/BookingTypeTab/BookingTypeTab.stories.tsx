import type { Meta, StoryObj } from '@storybook/react';

import BookingTypeTab from './BookingTypeTab';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BookingTypeTab> = {
  title: 'components/BookingTypeTab',
  component: BookingTypeTab,
//   tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BookingTypeTab>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}

