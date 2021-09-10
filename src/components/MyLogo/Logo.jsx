import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo__wrapper">
        <img
          className="logo-img pointer"
          src="http://khangndit.github.io/kauction-app/logo.png"
          alt="error"
        />
      </div>
    </Link>
  );
};

export default Logo;
