import React, { useState, useEffect } from 'react';
import { aosEvent, menuEvent } from './lib';
import './common.css';
import './main.css';
import PcView from './PcView';
import MobileView from './MobileView';

const RsNavbar = () => {
  useEffect(() => {
    aosEvent(); // AOS 초기화
    menuEvent(); // 상단 메뉴 이벤트 초기화
  }, []);

  return (
    <>
      <div data-aos-easing="ease" data-aos-duration="800" data-aos-delay="0">
        <div class="wrap wrap--main">
          <header id="header">
            <PcView />
            <MobileView />
          </header>
        </div>
      </div>

    </>
  );
};

export default RsNavbar;
