import Countdown from 'antd/lib/statistic/Countdown';
import React, { useContext, useEffect, useState } from 'react';
import './CountDown.css';
import { ClockCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import { SocketContext } from '../../shared/socket/socket';
import {
  cleanUpSocketCountDown,
  onResetProductById,
} from '../../shared/socket/socketService';
import ResultAuctionDialog from '../MyResultAuctionDialog/ResultAuctionDialog';
import { notification } from 'antd';
import { addNewCart } from '../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';

const styleViewScreen = {
  color: 'var(--red)',
  fontSize: 15,
  fontWeight: 600,
};

const styleDetailScreen = {
  color: 'var(--red)',
  fontSize: 25,
  fontWeight: 600,
};

let timeOut = null;

const CountDown = ({ size, productDtl }) => {
  const style = size === 'small' ? styleViewScreen : styleDetailScreen;
  const [isWait, setIsWait] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (productDtl.timer === 0 && !isWait) {
      onResetProductById(socket, +productDtl.id);
    }
    return () => {
      cleanUpSocketCountDown(socket);
      clearTimeout(timeOut);
    };
  }, []);

  const handleFinish = () => {
    setIsWait(true);
    const username = sessionStorage.getItem('username');
    if (productDtl.historyAuction.length > 0) {
      const userWin = productDtl.historyAuction[0].name;
      if (username === userWin) {
        setIsWin(true);
      } else {
        setIsWin(false);
      }
      showModal();
      addCart();
    }

    timeOut = setTimeout(() => {
      onResetProductById(socket, +productDtl.id);
      setIsWait(false);
      if (size === 'large') {
        notification.info({
          message: 'Thông báo',
          description: 'Phiên đấu giá tiếp theo đã bắt đầu!',
        });
      }
    }, 10000);
  };

  const showModal = () => {
    if (size === 'large') {
      // lager is detail screen
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addCart = () => {
    const cart = { ...productDtl };
    const action = addNewCart(cart);
    dispatch(action);
  };

  return (
    <div className="countdown__wrapper">
      {size !== 'small' && !isWait ? (
        <ClockCircleOutlined style={{ fontSize: 22, marginRight: 10 }} />
      ) : null}
      {isWait ? (
        <span style={{ fontSize: 13 }}>
          <LoadingOutlined style={{ fontSize: 11, marginRight: 3 }} />
          Đang xử lý ...
        </span>
      ) : (
        <Countdown
          value={Date.now() + productDtl.timer * 1000}
          valueStyle={style}
          onFinish={handleFinish}
        />
      )}
      <ResultAuctionDialog
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isWin={isWin}
      />
    </div>
  );
};

export default CountDown;
