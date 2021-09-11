import { Col, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import Product from '../../components/MyProduct/Product';
import './ProductsFind.css';
import dataFake from '../../shared/dataFake/data';
import { SocketContext } from '../../shared/socket/socket';
import {
  cleanUpSocketProducts,
  subscribeProductsCurrent,
} from '../../shared/socket/socketService';

const ProductsFind = ({ location }) => {
  const [title, setTitle] = useState('');
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

  useEffect(() => {
    const dataList = getProductList();
    setProductList(dataList);
  }, []);

  const getProductList = () => {
    return dataFake;
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryName = params.get('category');
    setTitle(categoryName.toUpperCase());
  }, [location]);

  return (
    <div className="productsFind__wrapper container">
      <div className="container productsFind">
        <div className="productsFind__title">
          <h3 className="productsFind__title-text">
            KẾT QUẢ TÌM KIẾM - {title}
          </h3>
        </div>
        <div className="productsFind__content">
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
  );
};

export default ProductsFind;
