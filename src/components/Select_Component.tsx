import React from 'react';
import { Form, Select } from 'antd';
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
};

const Select_Component: React.FC<ComponentData> =
(
  { field,
    specialOffers_Bolean_value,
    country_Bolean_value,setCountry_Bolean_value,
    setState_Boolean_value,setCity_Boolean_value

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
          form.steFieldsvalue({state:undefined,city:undefined,zipCode:undefined})
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










// import React, { useState } from 'react';
// import { Form, Select } from 'antd';
// import type { FieldsType } from '../types/FieldTypes';
// import { getValidationRules } from '../validation/validation';

// const { Option } = Select;

// type ComponentData = {
//   field: FieldsType,
//   specialOffers_Bolean_value: boolean,
//   country_Bolean_value:boolean,
//   setCountry_Bolean_value:React.Dispatch<React.SetStateAction<boolean>>,
//   setState_Boolean_value:React.Dispatch<React.SetStateAction<boolean>>
//   countryChange_Boolean_value:boolean,
//   setCountryChange_Boolean_value:React.Dispatch<React.SetStateAction<boolean>> ,
//   setStateChange_Boolean_value:React.Dispatch<React.SetStateAction<boolean>>
// };

// const Select_Component: React.FC<ComponentData> =
// (
//   { field,
//     specialOffers_Bolean_value,
//     country_Bolean_value,setCountry_Bolean_value,
//     setState_Boolean_value

//   }
// ) =>
//   {

//     const handleChange = (value: string) =>
//     {
//       const [oldValue,setOldValue]=useState<string>('')
//       const[,setStateValue]=useState<string>('')
//         if (field.name==="country" )
//         {
//           console.log('Selected Country:', value);
//           if(value)
//           {
//             if(oldValue!==value)
//             {
//               setCountry_Bolean_value(true);
//               setOldValue(value);

//             }
//             setCountry_Bolean_value(true);
//           }
//           else
//           {
//             setCountry_Bolean_value(false);
//           }
//         }
//         if(field.name==="state" && value)
//         {
//           setState_Boolean_value(true);
//         }
    
//     };

//   const offertype_verification:boolean=field.name==="offerType" && specialOffers_Bolean_value
//   const country_verification:boolean=field.name==="country"
//   const state_verification:boolean=field.name==="state" && country_Bolean_value
//   const final_verification:boolean=offertype_verification || country_verification || state_verification
//   // if (country_Bolean_value)
//   // {
//   //   if (field.name==="state")
//   //     {
        
//   //     }
    
//   // }

//   return (
//     <div>
      
//       {
//         (
//           final_verification
//         ) &&
//         <Form.Item
//           key={field.id}
//           name={field.name}
//           label={field.label}
//           rules={getValidationRules(field.validations)}
//         >
      
//           <Select placeholder={field.placeholder} onChange={handleChange}>
//           {
//             field.options?.map((opt) =>
//             (
//               <Option key={opt.value} value={opt.value}>
//                 {opt.label}
//               </Option>
//             ))
//           }
//       </Select>
//     </Form.Item>}
    
  
//     </div>

//   );
// };

// export default Select_Component;
