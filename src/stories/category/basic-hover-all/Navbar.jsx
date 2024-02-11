import React from 'react';
import './navbar.css'; // 가정: Navbar 컴포넌트의 스타일을 정의하는 CSS 파일

const Navbar = () => {
  return (
    <header id="hd_hoverall" class="bg-check">
      <div class="container d-flex jcb rel h-100px">
        <h1 class="d-flex aic">
          <a href=""><img src="" alt="" />LOGO</a>
        </h1>
        <ul id="gnb" class="d-flex aie">
          <li class="rel d1li">
            <a href="" class="d1a">MENU-1</a>
            <ul class="abs d2ul w-100 text-center">
              <li><a href="">SubMENU-1</a></li>
              <li><a href="">SubMENU-2</a></li>
              <li><a href="">SubMENU-3</a></li>
              <li><a href="">SubMENU-4</a></li>
              <li><a href="">SubMENU-5</a></li>
            </ul>
          </li>
          <li class="rel d1li">
            <a href="" class="d1a">MENU-2</a>
            <ul class="abs d2ul w-100 text-center">
              <li><a href="">SubMENU-1</a></li>
              <li><a href="">SubMENU-2</a></li>
              <li><a href="">SubMENU-3</a></li>
            </ul>
          </li>
          <li class="rel d1li">
            <a href="" class="d1a">MENU-3</a>
            <ul class="abs d2ul w-100 text-center">
              <li><a href="">SubMENU-1</a></li>
              <li><a href="">SubMENU-2</a></li>
              <li><a href="">SubMENU-3</a></li>
              <li><a href="">SubMENU-4</a></li>
            </ul>
          </li>
          <li class="rel d1li">
            <a href="" class="d1a">MENU-4</a>
            <ul class="abs d2ul w-100 text-center">
              <li><a href="">SubMENU-1</a></li>
              <li><a href="">SubMENU-2</a></li>
              <li><a href="">SubMENU-3</a></li>
              <li><a href="">SubMENU-4</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
