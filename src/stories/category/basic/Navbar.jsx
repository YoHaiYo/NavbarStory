import React from 'react';
import './navbar.css'; // 가정: Navbar 컴포넌트의 스타일을 정의하는 CSS 파일

const Navbar = ({ title, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">{title}</div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
