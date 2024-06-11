import { StoryFn, Meta } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Portfolio/RadioButton',
  component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'sample-radio',
  value: 'sample',
  checked: false,
  onChange: () => alert('Radio button clicked!'),
  disabled: false,
  backgroundColor: 'transparent',
};