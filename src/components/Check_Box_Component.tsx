import React from 'react'
import { Form, Checkbox, type CheckboxChangeEvent } from 'antd';
import { getValidationRules } from '../validation/validation';


import type { FieldsType } from '../types/FieldTypes'
type ComponentData={
  field: FieldsType,
  setSpecialOffers_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>
}

const Check_Box_Component: React.FC<ComponentData> = ({field,setSpecialOffers_Bolean_value}) => {
    const handleRadioChange = (e: CheckboxChangeEvent) => {
      const selectedValue = e.target.checked;
      console.log('Selected CheckBox:', selectedValue);
      setSpecialOffers_Bolean_value(selectedValue)
      
    }

  return (
    <div>

        <Form.Item 
          
          key={field.id}
          name={field.name}
          rules={getValidationRules(field.validations)}
          initialValue={ false }

        >
        <Checkbox onChange={handleRadioChange}>{field.label}</Checkbox>

        </Form.Item>
        
     
    </div>
  );
};

export default  Check_Box_Component
