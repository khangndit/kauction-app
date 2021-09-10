import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import './ResultAuctionDialog.css';

const ResultAuctionDialog = ({
  isModalVisible,
  handleOk,
  handleCancel,
  isWin,
}) => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const username = sessionStorage.getItem('username');
    setUser(username);
  }, []);

  return (
    <>
      {isWin ? (
        <Modal
          title="Chúc mừng"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button
              key={1}
              style={{ color: 'var(--white)', background: 'var(--blue)' }}
              onClick={handleOk}
            >
              Xác nhận
            </Button>,
          ]}
        >
          <div className="resultauction__content">
            <img
              className="img__feel"
              src="http://khangndit.github.io/kauction-app//images/smile.png"
              alt="smile"
            />
            <span className="resultauction__text">
              Xin chúc mừng {user}, bạn đã chiến thắng trong phiên đấu giá vừa
              rồi!
            </span>
          </div>
        </Modal>
      ) : (
        <Modal
          title="Đấu giá kết thúc"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button
              key={2}
              style={{ color: 'var(--white)', background: 'var(--blue)' }}
              onClick={handleOk}
            >
              Xác nhận
            </Button>,
          ]}
        >
          <div className="resultauction__content">
            <img
              className="img__feel"
              src="http://khangndit.github.io/kauction-app//images/sad.png"
              alt="smile"
            />
            <span className="resultauction__text">
              {user} ơi, bạn đã thua. Hãy tiếp tục trong phiên đấu giá tiếp
              theo!
            </span>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ResultAuctionDialog;
