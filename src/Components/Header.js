// Header.js
import React from 'react';
import '../Styles/Header.scss'; // Assume you have a corresponding CSS file

const Header = () => {
  return (
    <header className="header">
      {/* Logo Image on the left */}
      <img src="/shoplogo2.PNG" alt="A&C Automotive Logo" className="logo" />
      {/* Title centered in the header */}
      <h1 className="header-title">A&C Automotive</h1>
    </header>
  );
};

export default Header;