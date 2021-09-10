// import React, { useState } from 'react';
// import './StepPrice.css';
// import { Input, Button } from 'antd';

// const PERCENT_NEXT = 15; // %
// const PERCISION = 1000; // phạm vi làm tròn
// let PRICE_MIN = 1000;
// const StepPrice = ({ priceCurr }) => {
//   // const [price, setPrice] = useState(priceCurr);

//   // const onPriceUp = () => {
//   //   const newPrice = Math.round(
//   //     +price + (+price * PERCENT_NEXT) / 100,
//   //     PERCISION
//   //   );
//   //   setPrice(newPrice);
//   // };

//   // const onPriceDown = () => {
//   //   if (+price > PRICE_MIN) {
//   //     const newPrice = Math.round(
//   //       +price - (+price * PERCENT_NEXT) / 100,
//   //       PERCISION
//   //     );
//   //     setPrice(newPrice < PRICE_MIN ? PRICE_MIN : newPrice);
//   //   }
//   // };

//   // const onChangeInput = (e) => {
//   //   const value = e.target.value;
//   //   setPrice(value);
//   // };

//   return (
//     // <div className="stepprice__wrapper">
//     //   <Button
//     //     type="primary"
//     //     style={{ background: 'var(--blue)', border: 'none' }}
//     //     size="large"
//     //     onClick={onPriceDown}
//     //   >
//     //     -
//     //   </Button>
//     //   <Input
//     //     value={price}
//     //     type="number"
//     //     controls={false}
//     //     style={{ width: 120, border: '1px solid var(--blue)' }}
//     //     className="price__input"
//     //     onChange={(e) => onChangeInput(e)}
//     //   />
//     //   <Button
//     //     type="primary"
//     //     style={{ background: 'var(--blue)', border: 'none' }}
//     //     size="large"
//     //     onClick={onPriceUp}
//     //   >
//     //     +
//     //   </Button>
//     // </div>
//   );
// };

// export default StepPrice;
