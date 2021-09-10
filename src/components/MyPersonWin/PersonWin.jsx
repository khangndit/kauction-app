import React from 'react';
import './PersonWin.css';

import { TrophyOutlined } from '@ant-design/icons';

const PersonWin = ({ name }) => {
  return (
    <div className="personwin__wrapper">
      <TrophyOutlined style={{ fontSize: 20, marginRight: 5 }} />
      <span className="personwin__title">{name}</span>
    </div>
  );
};

export default PersonWin;
