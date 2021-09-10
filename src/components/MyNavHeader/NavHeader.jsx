import React from 'react';
import Logo from '../MyLogo/Logo';
import './NavHeader.css';
import { Row, Col } from 'antd';
import Cart from '../MyCart/Cart';
import Avt from '../MyAvt/Avt';
import SearchInput from '../MySearchInput/SearchInput';

const NavHeader = () => {
  return (
    <nav className="navheader__wrapper">
      <div className="container navheader">
        <Row>
          <Col span={4}>
            <Logo />
          </Col>
          <Col span={12}>
            <SearchInput />
          </Col>
          <Col span={3}>
            <Cart />
          </Col>
          <Col span={5}>
            <Avt />
          </Col>
        </Row>
      </div>
    </nav>
  );
};

export default NavHeader;
