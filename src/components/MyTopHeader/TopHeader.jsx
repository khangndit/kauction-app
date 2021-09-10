import React from 'react';
import './TopHeader.css';

const TopHeader = () => {
  return (
    <div className="topheader__wrapper">
      <div className="container">
        <div className="topheader">
          <span className="topheader__item-text">
            Chính sách đổi trả trong vòng 30 ngày
          </span>
          <span className="topheader__item-text">Miễn phí giao hàng 9.9</span>
          <span className="topheader__item-text">
            Tất cả sản phẩm đấu giá bắt đầu từ 1.000đ
          </span>
          <span className="topheader__item-text">
            Liên hệ: khangndit@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
