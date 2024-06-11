import { StoryFn, Meta } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Portfolio/Card',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/300x200',
  imageAlt: 'Card Image',
  title: 'Project Name',
  textContent: 'This is a description.',
};