import React, { useState } from 'react';
import './SearchInput.css';
import { AutoComplete, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const options = [
  {
    value: 'Điện thoại',
  },
  {
    value: 'Máy tính bảng',
  },
  {
    value: 'Thiết bị IT',
  },
  {
    value: 'Máy ảnh',
  },
  {
    value: 'Điện gia dụng',
  },
  {
    value: 'Hàng tiêu dùng',
  },
  {
    value: 'Đồ chơi Mẹ & Bé',
  },
  {
    value: 'Xe máy',
  },
  {
    value: 'Hàng quốc tế',
  },
  {
    value: 'Sách',
  },
  {
    value: 'Điên tử',
  },
  {
    value: 'Voucher - Dịch vụ',
  },
];

const SearchInput = () => {
  const [valueSearch, setValueSearch] = useState('');

  return (
    <div className="searchinput__wrapper">
      <AutoComplete
        style={{
          width: 400,
        }}
        options={options}
        placeholder="Tìm kiếm danh mục..."
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        value={valueSearch}
        onChange={(e) => {
          setValueSearch(e);
        }}
      />
      <Button
        ghost
        onClick={() => setValueSearch('')}
        icon={<SearchOutlined />}
      ></Button>

      {/* <Button
        style={{ borderLeft: 'none' }}
        icon={<SearchOutlined />}
        onClick={() => setValueSearch('')}
      /> */}
    </div>
  );
};

export default SearchInput;
