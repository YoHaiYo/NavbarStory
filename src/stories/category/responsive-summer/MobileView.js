import React from 'react'
import { useState, useEffect } from 'react';
import { aosEvent, menuEvent } from './lib';
import './common.css';
import './main.css';

export default function MobileView() {
  useEffect(() => {
    aosEvent(); // AOS 초기화
    menuEvent(); // 상단 메뉴 이벤트 초기화
  }, []);

  return (
    <div class="h_mo">
      
      <div class="h_left">
        <h1 class="h_logo">
          <a href="#none" title="홈으로 이동">
            <span class="blind">NavbarStory</span>
          </a>
        </h1>
      </div>

      <div class="h_main">
        <div class="h_main__inner">
          <ul class="h_menu">
            <li class="h_menu__list">
              <a href="#none" class="h_menu__link" aria-toggle="false">
                <h2>BRAND</h2>
              </a>
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
              <a href="#none" class="h_menu__link" aria-toggle="false">
                <h2>MENU</h2>
              </a>
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
              <a href="#none" class="h_menu__link" aria-toggle="false">
                <h2>CAMPUS</h2>
              </a>
              <ul class="h_submenu">
                <li>
                  <a href="#none">캠퍼스 찾기</a>
                </li>
                <li>
                  <a href="#none">친절 우수 캠퍼스</a>
                </li>
              </ul>
            </li>
            <li class="h_menu__list">
              <a href="#none" class="h_menu__link" aria-toggle="false">
                <h2>FRANCHISE</h2>
              </a>
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
              <a href="#none" class="h_menu__link" aria-toggle="false">
                <h2>ESG</h2>
              </a>
              <ul class="h_submenu">
                <li>
                  <a href="#none">사회공헌</a>
                </li>
              </ul>
            </li>
            <li class="h_menu__list">
              <a href="#none" class="h_menu__link" aria-toggle="false">
                <h2>COMMUNITY</h2>
              </a>
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
        <div class="h_main__util">
          <ul class="h_util__link">
            <li>
              <a href="#none">고객의 소리</a>
            </li>
            <li>
              <a href="#none" target="_blank">NavbarStory 스토어</a>
            </li>
            <li>
              <a href="#none" target="_blank">모바일상품권 스토어</a>
            </li>
          </ul>
          <ul class="h_util__sns">
            <li>
              <a href="#none" target="_blank">
                <img src="./source/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#none" target="_blank">
                <img src="./source/instar.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#none" target="_blank">
                <img src="./source/youtube.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#none" target="_blank">
                <img src="./source/kakao.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="h_mobile">
        <button type="button" class="h_mobile__btn" aria-pressed="false">
          <span></span>
        </button>
      </div>
    </div>
  )
}
