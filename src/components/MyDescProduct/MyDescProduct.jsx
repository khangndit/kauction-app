import React from 'react';
import DescProductDefault from '../MyDescProductDefault/DescProductDefault';
import './MyDescProduct.css';

const MyDescProduct = ({ desc }) => {
  return (
    <div className="descproduct__wrapper">
      <p className="descproduct__title">MÔ TẢ SẢN PHẨM</p>
      <div className="descproduct__content">
        <ul>
          {desc.map((el, index) => {
            return (
              <li key={index}>
                <span>{el}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <DescProductDefault />
    </div>
  );
};

export default MyDescProduct;
