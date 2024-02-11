import React from 'react';
import Navbar from './Navbar';

// 스토리북의 메타 데이터 설정
export default {
  title: 'Basic/Hover-One', // 사이드바에서 보여줄 경로! 바꾸게 되면 서버 껐다켜야됨.
  component: Navbar,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //   layout: 'centered',
  // },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // }
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});

