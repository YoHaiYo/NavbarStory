import React from 'react'
import { useState, useEffect } from 'react';
import { aosEvent, menuEvent } from './lib';
import './common.css';
import './main.css';

export default function PcView() {
  useEffect(() => {
    aosEvent(); // AOS 초기화
    menuEvent(); // 상단 메뉴 이벤트 초기화
  }, []);

  return(
    <div class="h_pc">
      <div class="h_main">
        <div class="h_main__wrap">
          <div class="h_main__lt">
            <ul class="h_menu">
              <li class="h_menu__list">
                <a href="#none" class="h_menu__link">BRAND</a>
                <ul class="h_submenu">
                  <li>
                    <a href="#none">브랜드 소개</a>
                  </li>
                  <li>
                    <a href="#none">브랜드 아이텐티티</a>
                  </li>
                  <li>
                    <a href="#none">오시는길</a>
                  </li>
                </ul>
              </li>
              <li class="h_menu__list">
                <a href="#none" class="h_menu__link">MENU</a>
                <ul class="h_submenu">
                  <li>
                    <a href="#none">신메뉴</a>
                  </li>
                  <li>
                    <a href="#none">와플</a>
                  </li>
                  <li>
                    <a href="#none">음료</a>
                  </li>
                  <li>
                    <a href="#none">젤라또</a>
                  </li>
                  <li>
                    <a href="#none">스쿨푸드</a>
                  </li>
                </ul>
              </li>
              <li class="h_menu__list">
                <a href="#none" class="h_menu__link">CAMPUS</a>
                <ul class="h_submenu">
                  <li>
                    <a href="#none">캠퍼스 찾기</a>
                  </li>
                  <li>
                    <a href="#none">친절 우수 캠퍼스</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="h_main__ct">
            <h1 class="h_logo">
              <a href="#none" title="홈으로 이동">
                <span class="blind">NavbarStory</span>
              </a>
            </h1>
          </div>
          
          <div class="h_main__rt">
            <ul class="h_menu">
              <li class="h_menu__list">
                <a href="#none" class="h_menu__link">FRANCHISE</a>
                <ul class="h_submenu">
                  <li>
                    <a href="#none">창업 경쟁력</a>
                  </li>
                  <li>
                    <a href="#none">창업절차 및 비용</a>
                  </li>
                  <li>
                    <a href="#none">창업문의 FAQ</a>
                  </li>
                  <li>
                    <a href="#none">창업상담</a>
                  </li>
                </ul>
              </li>
              <li class="h_menu__list">
                <a href="#none" class="h_menu__link">ESG</a>
                <ul class="h_submenu">
                  <li>
                    <a href="#none">사회공헌</a>
                  </li>
                </ul>
              </li>
              <li class="h_menu__list">
                <a href="#none" class="h_menu__link">COMMUNITY</a>
                <ul class="h_submenu">
                  <li>
                    <a href="#none">공지사항</a>
                  </li>
                  <li>
                    <a href="#none">이벤트</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="h_bg"></div>
    </div>
  )
}
