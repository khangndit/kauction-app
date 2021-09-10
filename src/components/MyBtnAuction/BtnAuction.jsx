import React, { useEffect, useState } from 'react';
import './BtnAuction.css';
import { Button, Input } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';

const PERCENT_NEXT = 15; // %
const PERCISION = 1000; // phạm vi làm tròn
let PRICE_MIN = 1150;
let PRICE_CURRR = 1150;

const BtnAuction = ({ priceCurr, showModal }) => {
  const [price, setPrice] = useState(PRICE_MIN);

  useEffect(() => {
    PRICE_CURRR = priceCurr;
    if (PRICE_CURRR > PRICE_MIN) {
      const newPrice = Math.round(
        +PRICE_CURRR + (+PRICE_CURRR * PERCENT_NEXT) / 100,
        PERCISION
      );
      setPrice(newPrice);
    } else {
      setPrice(PRICE_MIN);
    }
  }, [priceCurr]);

  const onPriceUp = () => {
    const newPrice = Math.round(
      +price + (+price * PERCENT_NEXT) / 100,
      PERCISION
    );
    setPrice(newPrice);
  };

  const onPriceDown = () => {
    if (+price > PRICE_CURRR) {
      const newPrice = Math.round(
        +price - (+price * PERCENT_NEXT) / 100,
        PERCISION
      );
      if (newPrice < PRICE_CURRR) {
        setPrice(PRICE_CURRR);
      } else {
        setPrice(newPrice < PRICE_MIN ? PRICE_MIN : newPrice);
      }
    }
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    PRICE_CURRR = value;
    if (('' + PRICE_CURRR).length > 12) return;
    setPrice(value);
  };

  const formatPriceVND = (price) => {
    return price.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });
  };

  return (
    <div className="auction__wrapper">
      <p className="auction__title">ĐẤU GIÁ NGAY: (+15%) </p>
      <div className="auction__btn">
        <div className="acution__stepprice">
          <Button
            type="primary"
            style={{ background: 'var(--blue)', border: 'none' }}
            size="large"
            onClick={onPriceDown}
          >
            -
          </Button>
          <Input
            value={formatPriceVND(price)}
            controls={false}
            style={{ width: 'auto', border: '1px solid var(--blue)' }}
            className="price__input"
            onChange={(e) => onChangeInput(e)}
            maxLength={12}
            disabled
          />
          <Button
            type="primary"
            style={{ background: 'var(--blue)', border: 'none' }}
            size="large"
            onClick={onPriceUp}
          >
            +
          </Button>
        </div>
        <Button
          type="primary"
          icon={<TrophyOutlined />}
          size="large"
          style={{ marginLeft: 10, background: 'var(--blue)', border: 'none' }}
          // onClick={handleOrder}
          onClick={() => showModal(price)}
        >
          Đặt giá thầu
        </Button>
      </div>
    </div>
  );
};

export default BtnAuction;
