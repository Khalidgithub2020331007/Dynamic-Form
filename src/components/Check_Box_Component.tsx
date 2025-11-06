import React from 'react'
import { Form, Checkbox } from 'antd';
import { getValidationRules } from '../validation/validation';
import './Component.css';


import type { FieldsType } from '../types/FieldTypes'
type ComponentData={
  field: FieldsType
}

const Check_Box_Component: React.FC<ComponentData> = ({field}) => {

  return (
    <div>

        <Form.Item 
          
          key={field.id}
          name={field.name}
          rules={getValidationRules(field.validations)}
          initialValue={ false }

        >
                  <Checkbox>{field.label}</Checkbox>

        </Form.Item>
        
     
    </div>
  );
};

export default  Check_Box_Component
