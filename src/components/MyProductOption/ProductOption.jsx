import React from 'react';
import './ProductOption.css';
import { Select } from 'antd';

const { Option } = Select;

const ProductOption = ({ option, handleChange }) => {
  return (
    <div className="option__wrapper">
      <p className="option__title">LỰA CHỌN ({option?.length}):</p>
      <Select
        defaultValue={option[0]}
        showSearch
        style={{ width: 280 }}
        optionFilterProp="children"
        onChange={handleChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {option?.map((el, index) => {
          return (
            <Option key={index} value={el}>
              {el}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default ProductOption;
