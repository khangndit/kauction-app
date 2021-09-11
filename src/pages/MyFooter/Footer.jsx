import { Col, Row } from 'antd';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div className="container">
        <Row>
          <Col span={6}>
            <p className="footer__title">HỔ TRỢ KHÁCH HÀNG</p>
            <div className="footer__list">
              <ul>
                <li>
                  <p className="footer__list-item">Các câu hỏi thường gặp</p>
                </li>
                <li>
                  <p className="footer__list-item">Gửi yêu cầu hổ trợ</p>
                </li>
                <li>
                  <p className="footer__list-item">Hướng dẫn đấu giá</p>
                </li>
                <li>
                  <p className="footer__list-item">Chính sách đổi trả</p>
                </li>
                <li>
                  <p className="footer__list-item">Chính sách hàng nhập khẩu</p>
                </li>
                <li>
                  <p className="footer__list-item">
                    Hổ trợ khách hàng: khangndit@gmail.com
                  </p>
                </li>
                <li>
                  <p className="footer__list-item">
                    Báo lỗi bảo mật: khangndit@gmail.com
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={6}>
            <p className="footer__title">VỀ K-AUCTION</p>
            <div className="footer__list">
              <ul>
                <li>
                  <p className="footer__list-item">Giới thiệu K-Auction</p>
                </li>
                <li>
                  <p className="footer__list-item">Tuyền dụng</p>
                </li>
                <li>
                  <p className="footer__list-item">
                    Chính sách bảo mật thanh toán
                  </p>
                </li>
                <li>
                  <p className="footer__list-item">
                    Chính sách giải quyết khiếu nại
                  </p>
                </li>
                <li>
                  <p className="footer__list-item">Điều khoản sử dụn</p>
                </li>
                <li>
                  <p className="footer__list-item">Giới thiệu K-Auction</p>
                </li>
                <li>
                  <p className="footer__list-item">Bán hàng doanh nghiệp</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={6}>
            <p className="footer__title">HỢP TÁC VÀ LIÊN KẾT</p>
            <div className="footer__list">
              <ul>
                <li>
                  <p className="footer__list-item">
                    Quy chế hoạt động Sàn Đấu giá
                  </p>
                </li>
                <li>
                  <p className="footer__list-item">Bán hàng cùng K-Auction</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={6}>
            <p className="footer__title">PHƯƠNG THỨC THANH TOÁN</p>
            <div className="footer__list">
              <ul>
                <li>
                  <p className="footer__list-item">VISA</p>
                </li>
                <li>
                  <p className="footer__list-item">MASTERCARD</p>
                </li>

                <li>
                  <p className="footer__list-item">JSB</p>
                </li>
                <li>
                  <p className="footer__list-item">TIỀN MẶT</p>
                </li>
                <li>
                  <p className="footer__list-item">INTERNET BANKING</p>
                </li>
                <li>
                  <p className="footer__list-item">TRẢ GÓP 0%</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
