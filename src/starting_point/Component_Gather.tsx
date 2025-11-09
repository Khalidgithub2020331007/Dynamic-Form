



import React, {  } from 'react'
import Check_Box from '../components/Check_Box_Component'
import Radio_Component from '../components/Radio_Component'
import type { FieldsType } from '../types/FieldTypes'
import Email_PassWord_Text_Component from '../components/Email_PassWord_Text_Component_Text_Area_Number'
import Select_Component from '../components/Select_Component'
import type { FormInstance } from 'antd'

type ComponentData={
  data: FieldsType,
  userType_Bolean_value:boolean ,
  setUserType_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>
  specialOffers_Bolean_value:boolean,
  setSpecialOffers_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>
  email_Bolean_value:boolean,
  setEmail_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>,
  country_Bolean_value:boolean,
  setCountry_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>,
  state_Boolean_value:boolean,
  city_Boolean_value:boolean,
  setState_Boolean_value:React.Dispatch<React.SetStateAction<boolean>>,
  setCity_Boolean_value:React.Dispatch<React.SetStateAction<boolean>>,
  form:FormInstance

}



const Component_Gather: React.FC<ComponentData> = (
  {
    data,
    userType_Bolean_value,setUserType_Bolean_value,
    specialOffers_Bolean_value,setSpecialOffers_Bolean_value,
    email_Bolean_value,setEmail_Bolean_value,
    country_Bolean_value,setCountry_Bolean_value,
    state_Boolean_value,setState_Boolean_value,
    city_Boolean_value,setCity_Boolean_value,
    form
  }) => {

  return (
    <div>
        
              {data.type === "radio" && <Radio_Component field={data} setUserType_Bolean_value={setUserType_Bolean_value} />}
              {(data.type === "email" ||data.type === "password"||data.type === "text"||data.type === "number"||data.type === "textarea")&& (<Email_PassWord_Text_Component 
              field={data} 
              userType_Bolean_value={userType_Bolean_value} 
              email_Bolean_value={email_Bolean_value} setEmail_Bolean_value={setEmail_Bolean_value}
              state_Boolean_value={state_Boolean_value}
              city_Boolean_value={city_Boolean_value} setCity_Boolean_value={setCity_Boolean_value}
              form={form}

              />)}
              {data.type === "select" && <Select_Component 
              field={data} 
              specialOffers_Bolean_value={specialOffers_Bolean_value} 
              country_Bolean_value={country_Bolean_value} setCountry_Bolean_value={setCountry_Bolean_value}
              setState_Boolean_value={setState_Boolean_value}
              setCity_Boolean_value={setCity_Boolean_value}
              form={form}
              />}
              {data.type === "checkbox" && <Check_Box  field={data} setSpecialOffers_Bolean_value={setSpecialOffers_Bolean_value} />}
        
        {/* <p>Out of box</p> */}
     
        
        
        
    </div> 
  )
}

export default Component_Gather
