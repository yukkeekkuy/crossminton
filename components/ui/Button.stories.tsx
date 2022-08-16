import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Actions/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
};

// export const IconButton: Story<ButtonProps> = (args) => {
//   args.text = 'Icon';
//   return <Button {...args} />;
// };
