import { StoryFn } from '@storybook/react';
import React from 'react';

import '../styles/global.css';
import StoryLayout from './story-layout';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story: StoryFn) => (
    <StoryLayout>
      <Story />
    </StoryLayout>
  ),
];
