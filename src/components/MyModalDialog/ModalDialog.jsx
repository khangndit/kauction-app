import { Button, Modal } from 'antd';
import React from 'react';
import './ModalDialog.css';
import { TrophyOutlined } from '@ant-design/icons';

const ModalDialog = ({
  isModalVisible,
  handleOk,
  handleCancel,
  title,
  price,
}) => {
  return (
    <Modal
      title={<h3 className="modal__title">{title}</h3>}
      visible={isModalVisible}
      onCancel={handleCancel}
      okText="Đặt giá thầu"
      cancelText="Huỷ"
      footer={[
        <Button
          key={1}
          style={{ color: 'var(--white)', background: 'var(--blue)' }}
          onClick={handleCancel}
        >
          Huỷ
        </Button>,
        <Button
          key={2}
          style={{ color: 'var(--white)', background: 'var(--blue)' }}
          onClick={handleOk}
        >
          Xác nhận
        </Button>,
      ]}
    >
      <div className="modal__icon">
        <TrophyOutlined style={{ fontSize: 40, color: 'var(--blue)' }} />
      </div>

      <p className="modal__content">
        Giá thầu của bạn là&nbsp;
        {price.toLocaleString('it-IT', {
          style: 'currency',
          currency: 'VND',
        })}
      </p>
      <p className="modal__content">Bạn sẽ là người có giá cao nhất!</p>
    </Modal>
  );
};

export default ModalDialog;
