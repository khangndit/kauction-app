import React from 'react';
import './ProductDtlTable.css';
import { Table } from 'antd';

let locale = {
  emptyText: 'Không tìm thấy dữ liệu',
};

const ProductDtlTable = ({ data }) => {
  const columns = [
    {
      title: 'Người đấu giá',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá thầu',
      dataIndex: 'price',
      key: 'price',
      render: (price) => {
        const formatPrice = (+price).toLocaleString('it-IT', {
          style: 'currency',
          currency: 'VND',
        });
        return formatPrice;
      },
    },
    {
      title: 'Số lượng',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Lựa chọn',
      dataIndex: 'option',
      key: 'option',
    },
    {
      title: 'Ngày giờ',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp) => {
        let d = new Date(timestamp);
        d =
          [
            d.getFullYear(),
            padLeft(d.getMonth() + 1, 2, '0'),
            padLeft(d.getDate(), 2, '0'),
          ].join('-') +
          ' ' +
          [
            padLeft(d.getHours(), 2, '0'),
            padLeft(d.getMinutes(), 2, '0'),
            padLeft(d.getSeconds(), 2, '0'),
          ].join(':');
        return d;
      },
    },
  ];

  const padLeft = (strValue, width, valueAppend) => {
    let rs = '' + strValue;
    while (rs.length < width) {
      rs = valueAppend + rs;
    }
    return rs;
  };

  return (
    <div className="productdtltable__wrapper">
      <Table locale={locale} columns={columns} dataSource={data} />
    </div>
  );
};

export default ProductDtlTable;
