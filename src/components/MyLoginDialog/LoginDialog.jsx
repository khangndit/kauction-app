import { Input, Modal, Form, Button } from 'antd';
import React from 'react';
import './LoginDialog.css';

const LoginDialog = ({ isModalVisible, handleOk, handleCancel }) => {
  const onFinish = (values) => {
    const username = values.username.replaceAll(' ', '');
    handleOk(username.toLowerCase());
  };

  return (
    <Modal
      title="Đăng nhập"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Huỷ
        </Button>,
      ]}
    >
      <div className="login__dialog">
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <p>Vui lòng nhập tên hiển thị</p>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Tên hiển thị không được để trống!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 12 }}>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginDialog;
