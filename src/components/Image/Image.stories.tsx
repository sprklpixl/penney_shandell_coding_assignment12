import { StoryFn, Meta } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Portfolio/Image',
  component: Image,
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Portrait = Template.bind({});
Portrait.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Portrait Image',
  borderRadius: '20%',
};

export const Hero = Template.bind({});
Hero.args = {
  src: 'https://via.placeholder.com/1400x390',
  alt: 'Hero Image',
  style: {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

export const Website = Template.bind({});
Website.args = {
  src: 'https://via.placeholder.com/400x300',
  alt: 'Card Image',
  width: '300px',
  height: '200px',
};
