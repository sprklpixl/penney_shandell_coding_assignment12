import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Portfolio/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Submit',
  onClick: () => alert('Your response has been recorded!'),
  disabled: false,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Secondary Button',
//   onClick: () => alert('Secondary Button clicked!'),
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: 'Disabled Button',
//   onClick: () => alert('Disabled Button clicked!'),
//   disabled: true,
// };

// export const Large = Template.bind({});
// Large.args = {
//   label: 'Large Button',
//   onClick: () => alert('Large Button clicked!'),
//   size: 'large',
// };

// export const Small = Template.bind({});
// Small.args = {
//   label: 'Small Button',
//   onClick: () => alert('Small Button clicked!'),
//   size: 'small',
// };