import React from 'react'
import { Form } from 'antd';
import type { FieldsType } from '../types/FieldTypes'
import Input from 'antd/es/input/Input'
import { getValidationRules } from '../validation/validation'
type ComponentData={
  field: FieldsType,
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
        

      </Form.Item>
    </div>
  )
}

export default Email_PassWord_Text_Component
