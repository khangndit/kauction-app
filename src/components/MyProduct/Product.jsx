import React from 'react';
import CountDown from '../MyCountDown/CountDown';
import './Product.css';
import { Rate } from 'antd';
import ProductDesc from '../MyProductDesc/ProductDesc';
import { Tooltip } from 'antd';
import { useHistory } from 'react-router';
import PriceCurrent from '../MyPriceCurrent/PriceCurrent';

const Product = ({ product }) => {
  const history = useHistory();

  const handleNavigate = (id) => {
    history.push(`/productDetail?id=${id}`);
  };

  return (
    <div className="product__wrapper">
      <Tooltip
        placement="right"
        color="#235190"
        title={
          <ProductDesc
            description={product.description}
            successAuction={product.successAuction}
            title={product.title}
          />
        }
      >
        <div className="product__content">
          <img
            className="product__content-img pointer"
            src={product.images[0]}
            alt="error"
            onClick={() => handleNavigate(product.id)}
          />
          <div className="product__desc">
            <h4
              className="product__desc-title text-2 pointer"
              onClick={() => handleNavigate(product.id)}
            >
              {product.title}
            </h4>
            <div className="product__desc-rate">
              <p className="product__desc-categ">{product.category}</p>
              <Rate
                style={{ fontSize: 12, marginLeft: 5 }}
                allowHalf
                defaultValue={product.rate}
              />
            </div>
            <div className="product__desc-bottom">
              <CountDown size="small" productDtl={product} />
              <div className="product__desc-price">
                <PriceCurrent size="small" priceCurr={product.priceCurrent} />
              </div>
            </div>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default Product;
