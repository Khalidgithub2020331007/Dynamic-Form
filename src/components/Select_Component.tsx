import React from 'react';
import { Form, Select } from 'antd';
import type { FieldsType } from '../types/FieldTypes';
import { getValidationRules } from '../validation/validation';

const { Option } = Select;

type ComponentData = {
  field: FieldsType;
};

const Select_Component: React.FC<ComponentData> = ({ field }) => {
  // console.log('Options:', field.options);

  return (
    <Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={getValidationRules(field.validations)}
    >
      
      <Select placeholder={field.placeholder}>
        {field.options?.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default Select_Component;
