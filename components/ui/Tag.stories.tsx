import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tag from './Tag';

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'テストタグ',
  bgColor: 'bg-white',
  textColor: 'text-black',
  size: 'badge-md',
  variant: 'badge',
};

export const Outline = Template.bind({});
Outline.args = {
  ...Default.args,
  variant: 'badge-outline',
  bgColor: '',
  textColor: 'text-black dark:text-white',
};
