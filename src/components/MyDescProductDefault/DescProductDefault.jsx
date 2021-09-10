import React from 'react';
import './DescProductDefault.css';

const DescProductDefault = () => {
  return (
    <div className="descdefault__wrapper">
      <p className="descdefault__title">Giao hàng</p>
      <p className="descdefault__content">
        Với mỗi hoá đơn, bạn sẽ thanh toán phí vận chuyển và 10% phí dịch vụ để
        đảm bảo kiện hàng của bạn được gửi nhanh chóng an toàn. K-Auction hỗ trợ
        bạn một phần phí vận chuyển ở mục 'Khuyến mãi' để giúp bạn an tâm mua
        sắm thật nhiều với phí vận chuyển tiết kiệm nhất.
      </p>
      <p className="descdefault__title">Trả lại sản phẩm</p>
      <p className="descdefault__content">
        Chính sách đổi trả: Trong vòng 30 ngày kể từ ngày nhận hàng, K-Auction
        chấp nhận đổi trả tất cả sản phẩm bao gồm thiết bị điện tử, quần áo,
        giày dép, và hơn thế nữa. Lưu ý, sản phẩm phải được hoàn trả trong tình
        trạng ban đầu. Khi đáp ứng được tình trạng hoàn trả, K-Auction sẽ hoàn
        lại đầy đủ giá trị sản phẩm, không bao gồm 10% phí dịch vụ. Người mua
        hàng chịu trách nhiệm về chi phí phát sinh khi trả hàng (nếu có).
      </p>
      <p className="descdefault__title">Thanh toán</p>
      <p className="descdefault__content">
        Chúng tôi cung cấp phương thức thanh toán thuận tiện bằng tiền mặt khi
        nhận hàng và thanh toán an toàn qua chuyển khoản ngân hàng.
      </p>
    </div>
  );
};

export default DescProductDefault;
