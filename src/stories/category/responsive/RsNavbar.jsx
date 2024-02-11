import React, { useState } from 'react';
import './rsNavbar.css'; // CSS 파일을 컴포넌트와 같은 위치에 저장하세요.

const RsNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div id="nav-pc" className="navbar_main">
        <a className="navbar_logo" href="#">로고</a>
        <div className="navbar_links">
          <a href="#">ABOUT</a>
          <a href="#">WORKS</a>
          <a href="#">NEWS</a>
          <a href="#">CONTACT</a>
        </div>
      </div>

      <div id="nav-mo" className={`navbar_overlay ${isActive ? 'active' : ''}`} onClick={() => setIsActive(false)}></div>

      <div className="navbar_burger" onClick={() => setIsActive(!isActive)}>
        三
      </div>

      <div className={`navbar_menu ${isActive ? 'active' : ''}`}>
        <a href="#">ABOUT</a>
        <a href="#">WORKS</a>
        <a href="#">NEWS</a>
        <a href="#">CONTACT</a>
        <div className="navbar_burger_back" onClick={() => setIsActive(false)}>
          {/* 여기에 닫기(X) 아이콘 SVG 코드 삽입 */}
        </div>
      </div>
    </>
  );
};

export default RsNavbar;
