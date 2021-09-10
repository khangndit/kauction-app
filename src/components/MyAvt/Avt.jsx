import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import './Avt.css';
import { Button } from 'antd';
import LoginDialog from '../MyLoginDialog/LoginDialog';

const Avt = () => {
  const [user, setUser] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    if (username) {
      setUser(username);
    } else {
      showModal();
    }
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (username) => {
    sessionStorage.setItem('username', username);
    setUser(username);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="avt__wrapper">
      {user ? (
        <>
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            {user.substring(0, 1).toUpperCase()}
          </Avatar>
          <span className="avt-name text-1">{user}</span>
        </>
      ) : (
        <Button ghost onClick={showModal}>
          Đăng nhập
        </Button>
      )}
      <LoginDialog
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Avt;
