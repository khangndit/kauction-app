import React from 'react';
import './CartDialog.css';

const CartDialog = ({ cartList }) => {
  return (
    <div className="cartdialog__wrapper">
      <div className="cartdialog__content">
        {cartList.length > 0 ? (
          <ul>
            {cartList.map((cart, index) => {
              return (
                <li key={index}>
                  <div className="cartdialog__content-item">
                    <img
                      className="cartdialog__content-img"
                      src={cart.images[0]}
                      alt="product"
                    />
                    <div className="cartdialog__content-left">
                      <span className="cartdialog__content-title text-2">
                        {cart.title}
                      </span>
                      <span className="cartdialog__content-price">
                        Giá:&nbsp;
                        {(+cart.priceCurrent).toLocaleString('it-IT', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="cartdialog__notdata">
            <p>Chưa có sản phẩm</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDialog;
