import React from 'react';
import './PriceCurrent.css';

const stylePriceDtl = {
  color: 'var(--red)',
  fontSize: 20,
  fontWeight: 500,
};

const stylePriceView = {
  color: 'var(--red)',
  fontSize: 15,
  fontWeight: 600,
};

const PriceCurrent = ({ size, priceCurr }) => {
  const style = size === 'small' ? stylePriceView : stylePriceDtl;
  return (
    <span className="text-1" style={style}>
      {(+priceCurr).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      })}
    </span>
  );
};

export default PriceCurrent;
