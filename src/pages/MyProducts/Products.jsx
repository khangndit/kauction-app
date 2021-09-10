import { Col, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import Product from '../../components/MyProduct/Product';
import SlideShow from '../MySlideShow/SlideShow';
import './Products.css';
import { SocketContext } from '../../shared/socket/socket';
import {
  cleanUpSocketProducts,
  subscribeProductsCurrent,
} from '../../shared/socket/socketService';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    subscribeProductsCurrent(socket, (data) => {
      setProductList(data);
    });
    return () => {
      cleanUpSocketProducts(socket);
    };
  }, []);

  return (
    <>
      <SlideShow />
      <div className="products__wrapper">
        <div className="container products">
          <div className="products__title">
            <h3 className="products__title-text">ĐẤU GIÁ NHIỀU NHẤT</h3>
          </div>
          <div className="products__content">
            <Row gutter={[12, 20]}>
              {productList.map((el) => {
                return (
                  <Col span={4} key={el.id}>
                    <Product product={el} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
