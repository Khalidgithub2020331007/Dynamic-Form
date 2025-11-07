import React from 'react';
import { Form, Select } from 'antd';
import type { FieldsType } from '../types/FieldTypes';
import { getValidationRules } from '../validation/validation';

const { Option } = Select;

type ComponentData = {
  field: FieldsType;
  specialOffers_Bolean_value: boolean;
  country_Bolean_value:boolean,
  setCountry_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>
  setState_Boolean_value:React.Dispatch<React.SetStateAction<boolean>>
};

const Select_Component: React.FC<ComponentData> = (
  { field,
    specialOffers_Bolean_value,
    country_Bolean_value,setCountry_Bolean_value,
    setState_Boolean_value

  }) => {
  // console.log('Options:', field.options);

  const handleChange = (value: string) => {
    if (field.name==="country" && value){
      setCountry_Bolean_value(true);
    }
    if(field.name==="state" && value){
      setState_Boolean_value(true);
    }
    
  };


  return (
    <div>
      {( (field.name==="offerType" && specialOffers_Bolean_value)|| field.name==='country' ) && <Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={getValidationRules(field.validations)}
    >
      
      <Select placeholder={field.placeholder} onChange={handleChange}>
        {field.options?.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </Form.Item>}
    {
      field.name==='state' && country_Bolean_value &&  <Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={getValidationRules(field.validations)}
    >
      
      <Select placeholder={field.placeholder} onChange={handleChange}>
        {field.options?.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
    }
  
    </div>

  );
};

export default Select_Component;
