import React from 'react';
import type { FieldsType } from '../types/FieldTypes';
import { Form, Radio, type RadioChangeEvent } from 'antd';
import { getValidationRules } from '../validation/validation';

type ComponentData={
  field: FieldsType,
  setUserType_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>
}

const Radio_Component: React.FC<ComponentData> =
(
  {
     field,
     setUserType_Bolean_value
  }
) =>
  {
    const handleRadioChange = (e: RadioChangeEvent) =>
    {
      const selectedValue = e.target.value;
      if (selectedValue === 'business')
      {
        setUserType_Bolean_value(true);
      }
      else
      {
        setUserType_Bolean_value(false);
      }
    
    }


  return(
    <div>
     
        <Form.Item
          key={field.id}
          name={field.name}
          label={field.label}
          rules={getValidationRules(field.validations)}
          initialValue={String(field.defaultValue)}

        >
          <Radio.Group onChange={handleRadioChange}>
            {field.options?.map((opt) => 
              (
                <Radio key={opt.value} value={opt.value}>
                  {opt.label}
                </Radio>
              ))
            }
          </Radio.Group>
        </Form.Item>

        
      
    </div>
  );
};

export default Radio_Component;
