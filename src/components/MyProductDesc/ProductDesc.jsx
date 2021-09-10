import React from 'react';
import './ProductDesc.css';

const ProductDesc = ({ description, successAuction, title }) => {
  return (
    <div className="productdesc__wrapper">
      <h3 className="productdesc__title text-3">{title}</h3>
      <p className="productdesc__buycount">
        Đã đấu giá thành công:&nbsp;
        <span style={{ fontWeight: 600 }}>{successAuction}</span>
      </p>
      <p className="productdesc__text">Mô tả sản phẩm:</p>
      <div className="productdesc__list">
        <ul>
          {description.map((el, index) => {
            return (
              <li key={index}>
                <span className="text-3">{el}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductDesc;
