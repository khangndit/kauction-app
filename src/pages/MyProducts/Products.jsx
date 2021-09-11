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
import { ShimmerSimpleGallery } from 'react-shimmer-effects';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    subscribeProductsCurrent(socket, (data) => {
      setProductList(data);
    });
    window.scrollTo(0, 0);
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
            {productList.length > 0 ? (
              <Row gutter={[12, 20]}>
                {productList.map((el) => {
                  return (
                    <Col span={4} key={el.id}>
                      <Product product={el} />
                    </Col>
                  );
                })}
              </Row>
            ) : (
              <ShimmerSimpleGallery
                card
                imageHeight={220}
                caption
                col={4}
                row={2}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
