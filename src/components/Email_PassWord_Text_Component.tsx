import React from 'react'
import { Form, Select } from 'antd';
const { Option } = Select;
import type { FieldsType } from '../types/FieldTypes'
import Input from 'antd/es/input/Input'
import { getValidationRules } from '../validation/validation'
type ComponentData={
  field: FieldsType
}

const Email_PassWord_Text_Component: React.FC<ComponentData> = ({field}) => {
    // console.log(field)
  return (
    <div>
      <Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={getValidationRules(field.validations)}
      
      >
        <Input type={field.type} placeholder={field.placeholder} />
        
         {field.options?.map((opt) => (
      <Option key={opt.value} value={opt.value}>
        {opt.label}
      </Option>
    ))}

      </Form.Item>
    </div>
  )
}

export default Email_PassWord_Text_Component
