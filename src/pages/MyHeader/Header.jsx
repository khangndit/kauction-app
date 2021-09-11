import React from 'react';
import NavHeader from '../../components/MyNavHeader/NavHeader';
import TopHeader from '../../components/MyTopHeader/TopHeader';
import './Header.css';

const Header = () => {
  return (
    <header className="header__wrapper container">
      <TopHeader />
      <NavHeader />
    </header>
  );
};

export default Header;
