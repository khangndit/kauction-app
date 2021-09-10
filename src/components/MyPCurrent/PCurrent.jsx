import React from 'react';
import PersonWin from '../MyPersonWin/PersonWin';
import PriceCurrent from '../MyPriceCurrent/PriceCurrent';
import './PCurrent.css';

const PCurrent = ({ productDtl }) => {
  return (
    <div className="pcurrent__wrapper">
      <div className="pcurrent__price">
        <p className="pcurrent-title">GIÁ THẦU HIỆN TẠI:</p>
        <div className="pcurrent-content">
          <PriceCurrent size="large" priceCurr={productDtl?.priceCurrent} />
        </div>
      </div>
      <div className="pcurrent__personwin">
        <p className="pcurrent-title">NGƯỜI THẮNG:</p>
        <div className="pcurrent-content">
          {productDtl?.historyAuction[0]?.name ? (
            <PersonWin name={productDtl?.historyAuction[0]?.name} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PCurrent;
