import { Col, notification, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import BtnAuction from '../../components/MyBtnAuction/BtnAuction';
import CountDown from '../../components/MyCountDown/CountDown';
import MyDescProduct from '../../components/MyDescProduct/MyDescProduct';
import ImgCarousel from '../../components/MyImgCarousel/ImgCarousel';
import ModalDialog from '../../components/MyModalDialog/ModalDialog';
import PCurrent from '../../components/MyPCurrent/PCurrent';
import ProductDtlTable from '../../components/MyProductDtlTable/ProductDtlTable';
import ProductOption from '../../components/MyProductOption/ProductOption';
import { SocketContext } from '../../shared/socket/socket';
import {
  cleanUpSocketProductDetail,
  sendInfoAcutionRoomOnly,
  sendInfoOrderAuction,
  subscribeInfoAuction,
  subscribeProductById,
  subscribeProductRoomOnly,
} from '../../shared/socket/socketService';
import './ProductDetail.css';

const ProductDetail = ({ location }) => {
  const [productDtl, setProductDtl] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [price, setPrice] = useState(1150);
  const [option, setOption] = useState(null);

  const socket = useContext(SocketContext);

  useEffect(() => {
    subscribeProductById(socket, getProductIdFromURL(), (data) => {
      setProductDtl(data);
    });
    subscribeProductRoomOnly(socket, getProductIdFromURL(), (data) => {
      setProductDtl(data);
    });
    subscribeInfoAuction(socket, (data) => {
      setProductDtl(data.product);
      openNotification(data);
    });
  }, [location]);

  useEffect(() => {
    return () => {
      cleanUpSocketProductDetail(socket, getProductIdFromURL());
    };
  }, []);

  const getProductIdFromURL = () => {
    const params = new URLSearchParams(location.search);
    return +params.get('id');
  };

  const showModal = (price) => {
    const username = sessionStorage.getItem('username');
    if (!username) {
      notification.error({
        message: 'Thông báo',
        description: 'Vui lòng đăng nhập!',
      });
      return;
    }
    setPrice(price);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    sendInfoOrderAuction(socket, price, getProductIdFromURL());
    const username = sessionStorage.getItem('username');
    const op = !option ? productDtl.options[0] : option;
    sendInfoAcutionRoomOnly(socket, getProductIdFromURL(), price, username, op);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openNotification = (data) => {
    const username = sessionStorage.getItem('username');
    const userWin = data.product?.historyAuction[0]?.name;
    if (username !== userWin) {
      notification.info({
        message: 'Thông báo',
        description: data.message,
      });
    }
  };

  const handleChangeOption = (value) => {
    setOption(value);
  };

  return (
    <>
      {productDtl ? (
        <div className="productdtl__wrapper">
          <div className="container productdtl">
            <h3 className="productdtl__title">ĐẤU GIÁ</h3>
            <Row gutter={[20]}>
              <Col span={12}>
                <ImgCarousel imgList={productDtl.images} />
              </Col>
              <Col span={12}>
                <div className="productdtl__info">
                  <h1 className="productdtl__info-title text-2">
                    {productDtl.title}
                  </h1>
                  <CountDown size="large" productDtl={productDtl} />
                  <PCurrent productDtl={productDtl} />
                  <ProductOption
                    option={productDtl.options}
                    handleChange={handleChangeOption}
                  />
                  <BtnAuction
                    priceCurr={productDtl.priceCurrent}
                    showModal={showModal}
                  />
                </div>
              </Col>
              <Col span={24}>
                <ProductDtlTable data={productDtl.historyAuction} />
              </Col>
              <Col span={24}>
                <MyDescProduct desc={productDtl.description} />
              </Col>
            </Row>
          </div>
        </div>
      ) : null}
      <ModalDialog
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        price={price}
        title="Xác nhận giá thầu"
      />
    </>
  );
};

export default ProductDetail;
