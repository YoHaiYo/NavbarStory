import React from 'react';
import Navbar from './Navbar';

// 스토리북의 메타 데이터 설정
export default {
  title: 'Navbar/Basic', // 사이드바에서 보여줄 경로! 바꾸게 되면 서버 껐다켜야됨.
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'My Nav',
  links: [
    { label: 'Home', url: '#' },
    { label: 'About', url: '#' },
    { label: 'Services', url: '#' },
    { label: 'Contact', url: '#' },
  ],
};
