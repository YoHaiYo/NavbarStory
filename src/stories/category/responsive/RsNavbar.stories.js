import React from 'react';
import RsNavbar from './RsNavbar';

export default {
  title: 'Responsive/Basic',
  component: RsNavbar,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //   layout: 'centered',
  // },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

};


const Template = (args) => <RsNavbar {...args} />;

export const Default = Template.bind({});
