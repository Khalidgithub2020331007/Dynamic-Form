import React from 'react';
import { Form, Select, type FormInstance } from 'antd';
import type { FieldsType } from '../types/FieldTypes';
import { getValidationRules } from '../validation/validation';

const { Option } = Select;

type ComponentData = {
  field: FieldsType,
  specialOffers_Bolean_value: boolean,
  country_Bolean_value:boolean,
  setCountry_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>,
  setState_Boolean_value:React.Dispatch<React.SetStateAction<boolean>>,
  setCity_Boolean_value:React.Dispatch<React.SetStateAction<boolean>>,
  form:FormInstance
};

const Select_Component: React.FC<ComponentData> =
(
  { field,
    specialOffers_Bolean_value,
    country_Bolean_value,setCountry_Bolean_value,
    setState_Boolean_value,setCity_Boolean_value,
    form

  }
) =>
  {

    const handleChange = (value: string) =>
    {
        if (field.name==="country")
        {
          setCountry_Bolean_value(!!value);
          setState_Boolean_value(false);
          setCity_Boolean_value(false);
          form.setFieldsValue({state:undefined,city:undefined,zipCode:undefined})
        }
        if(field.name==="state" )
        {
          setState_Boolean_value(!!value);
          setCity_Boolean_value(false);
          form.setFieldsValue({city:undefined,zipCode:undefined

          })
          
        }
    
    };

  const offertype_verification:boolean=field.name==="offerType" && specialOffers_Bolean_value
  const country_verification:boolean=field.name==="country"
  const state_verification:boolean=field.name==="state" && country_Bolean_value
  const final_verification:boolean=offertype_verification || country_verification || state_verification


  return (
    <div>
      
      {
        (
          final_verification
        ) &&
        <Form.Item
          key={field.id}
          name={field.name}
          label={field.label}
          rules={getValidationRules(field.validations)}
        >
      
          <Select placeholder={field.placeholder} onChange={handleChange}>
          {
            field.options?.map((opt) =>
            (
              <Option key={opt.value} value={opt.value}>
                {opt.label}
              </Option>
            ))
          }
      </Select>
    </Form.Item>}
    
  
    </div>

  );
};

export default Select_Component;



