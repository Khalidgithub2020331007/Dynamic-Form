import React from 'react'
import { Form } from 'antd';
import type { FieldsType } from '../types/FieldTypes'
import Input from 'antd/es/input/Input'
import { getValidationRules } from '../validation/validation'
type ComponentData={
  field: FieldsType,
  userType_Bolean_value:boolean,
  email_Bolean_value:boolean,
  setEmail_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>,
  state_Boolean_value:boolean,
  city_Boolean_value:boolean ,
  setCity_Boolean_value:React.Dispatch<React.SetStateAction<boolean>>
}


const Email_PassWord_Text_Component: React.FC<ComponentData> = (
  {
    field,
    userType_Bolean_value,
    email_Bolean_value,
    setEmail_Bolean_value,
    state_Boolean_value,
    city_Boolean_value,
    setCity_Boolean_value
  }) => {
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    {
      const inputValue = e.target.value;
      if(field.name==="email")
      {
        if(inputValue==="admin@gmail.com")
        {
          setEmail_Bolean_value(true)
        
        }
        else
        {
          setEmail_Bolean_value(false)
        }
      }
      
      if(field.name==="city")
      {
        if(inputValue)
        {
          setCity_Boolean_value(true);
        }
        else
        {
          setCity_Boolean_value(false);
        }
      }
    }
  const compnay_and_tax_verification:boolean=(field.name==="companyName" || field.name==="taxId") && userType_Bolean_value
  const admin_verification:boolean=field.name==="adminCode" && email_Bolean_value
  const email_password_age_verification:boolean=(field.name==="email" ||field.name==="comments"|| field.name==="password"||field.name==="age")
  const city_verification:boolean=field.name==="city" && state_Boolean_value
  const zipCode_verification:boolean=field.name==='zipCode'&& city_Boolean_value
  const final_verification:boolean=compnay_and_tax_verification || admin_verification || email_password_age_verification || city_verification || zipCode_verification
  
  return (
    <div>
      { 
      (
        final_verification
      )
        &&
        <Form.Item
          key={field.id}
          name={field.name}
          label={field.label}
          rules={getValidationRules(field.validations)}
      
        >
          <Input type={field.type} placeholder={field.placeholder} onChange={onHandleChange}/>


        </Form.Item>
    }
      


    </div>
  )
}

export default Email_PassWord_Text_Component
