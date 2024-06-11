import { StoryFn, Meta } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Portfolio/Label',
  component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Sample Label',
  htmlFor: 'sample-input',
  disabled: false,
  backgroundColor: 'transparent',
};