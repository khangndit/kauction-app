import React from 'react';
import './Cart.css';
import { Badge, Popover } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import CartDialog from '../MyCartDialog/CartDialog';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartList = useSelector((state) => state.cart);
  return (
    <div className="cart__wrapper">
      <Popover
        placement="bottom"
        content={<CartDialog cartList={cartList} />}
        title="Sản phẩm mới thêm"
      >
        <div className="cart__wrapper-content">
          <Badge size="small" count={cartList.length}>
            <ShoppingCartOutlined className="cart-icon" />
          </Badge>
          <span className="cart-text pointer">Giỏ hàng</span>
        </div>
      </Popover>
    </div>
  );
};

export default Cart;
