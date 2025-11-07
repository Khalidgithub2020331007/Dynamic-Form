import React from 'react'
import { Form } from 'antd';
import type { FieldsType } from '../types/FieldTypes'
import Input from 'antd/es/input/Input'
import { getValidationRules } from '../validation/validation'
type ComponentData={
  field: FieldsType,
  userType_Bolean_value:boolean,
  email_Bolean_value:boolean,
  setEmail_Bolean_value:React.Dispatch<React.SetStateAction<boolean>> 
  state_Boolean_value:boolean
  city_Boolean_value:boolean 
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
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputValue = e.target.value;
      if(field.name==="email"){
        if(inputValue==="admin@gmail.com"){
          setEmail_Bolean_value(true)
        }else{
          setEmail_Bolean_value(false)
        }
      }
      console.log(inputValue)
      if (field.name==="city"){
        if(inputValue)
        {
        setCity_Boolean_value(true);
        }
      else{
        setCity_Boolean_value(false);
      }
      }
    }
    console.log('city',city_Boolean_value)

  
  return (
    <div>
      { ((field.name==="companyName" || field.name==="taxId") && userType_Bolean_value) &&<Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={getValidationRules(field.validations)}
      
      >
        <Input type={field.type} placeholder={field.placeholder} onChange={onHandleChange}/>


      </Form.Item>}
      {
        (field.name==="adminCode" && email_Bolean_value)&& <Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={getValidationRules(field.validations)}
      
      >
        <Input type={field.type} placeholder={field.placeholder} onChange={onHandleChange}/>


      </Form.Item>
      }
      {
        (field.name==="email" ||field.name==="comments"|| field.name==="password"||field.name==="age")&&<Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={getValidationRules(field.validations)}
      
      >
        <Input type={field.type} placeholder={field.placeholder} onChange={onHandleChange}/>


      </Form.Item>
      }
      { (field.name==="city" && state_Boolean_value) &&<Form.Item
      key={field.id}
      name={field.name}
      label={field.label}
      rules={getValidationRules(field.validations)}
      
      >
        <Input type={field.type} placeholder={field.placeholder} onChange={onHandleChange}/>


      </Form.Item>
      }
      {
        (field.name==='zipCode'&& city_Boolean_value) && <Form.Item
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
