import React from 'react';
import type { FieldsType } from '../types/FieldTypes';
import { Form, Radio } from 'antd';
import { getValidationRules } from '../validation/validation';

type ComponentData = {
  field: FieldsType;
};

const Radio_Component: React.FC<ComponentData> = ({ field }) => {


  return (
    <div>
     
        <Form.Item
          key={field.id}
          name={field.name}
          label={field.label}
          rules={getValidationRules(field.validations)}
          initialValue={String(field.defaultValue)}

        >
          <Radio.Group>
            {field.options?.map((opt) => (
              <Radio key={opt.value} value={opt.value}>
                {opt.label}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>

        
      
    </div>
  );
};

export default Radio_Component;
