import React from 'react';
import './Category.css';
import { NavLink } from 'react-router-dom';

const categoryList = [
  'Điện thoại',
  'Máy tính bảng',
  'Thiết bị IT',
  'Máy ảnh',
  'Điện gia dụng',
  'Hàng tiêu dùng',
  'Đồ chơi, Mẹ & Bé',
  'Xe máy',
  'Hàng quốc tế',
  'Sách',
  'Điên tử',
  'Voucher - Dịch vụ',
];

const Category = () => {
  return (
    <div className="category__wrapper container">
      <div className="container">
        <div className="catergory">
          {categoryList.map((el) => {
            return (
              <span className="catergory__item" key={el}>
                <NavLink to={`/kauction-app/productFind?category=${el}`}>
                  {el}
                </NavLink>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
