// import React from 'react'
// import Check_Box from '../components/Check_Box_Component'
// import Email_Component from '../components/Email_Component'
// import Password_Component from '../components/Password_Component'
// import Radio_Component from '../components/Radio_Component'
// import Text_Component from '../components/Text_Component'
// import Number_Component from '../components/Number_Component'
// import type { FieldsType, FormDataType } from '../types/FieldTypes'
// import Select_Component from '../components/Select_Component'
// import Text_Area_Compornet from '../components/Text_Area_Compornet'

// type ComponentData={
//   data: FormDataType
// }



// const Component_Gather: React.FC<ComponentData> = ({data}) => {
//     console.log({data})
//   return (
//     <div>
//         <h1>{data.title}</h1>
//         <div>
//           {data.fields.map((field: FieldsType, idx: number) => (
//             <React.Fragment key={idx}>
//               {field.type === "radio" && <Radio_Component field={field} />}
//               {field.type === "email" && <Email_Component field={field} />}
//               {field.type === "password" && <Password_Component field={field}/>}
//               {field.type === "text" && <Text_Component  field={field} />}
//               {field.type === "select" && <Select_Component field={field} />}
//               {field.type === "number" && <Number_Component field={field} />}
//               {field.type === "textarea" && <Text_Area_Compornet field={field} />}
//               {field.type === "checkbox" && <Check_Box  field={field} />}
//             </React.Fragment>
//           ))}
          
//         </div>
//         <p>Out of box</p>
     
        
        
        
//     </div> 
//   )
// }

// export default Component_Gather







import React, { useState } from 'react'
import Check_Box from '../components/Check_Box_Component'
import Radio_Component from '../components/Radio_Component'
import type { FieldsType } from '../types/FieldTypes'
import Email_PassWord_Text_Component from '../components/Email_PassWord_Text_Component_Text_Area'
import Select_Component from '../components/Select_Component'

type ComponentData={
  data: FieldsType
}



const Component_Gather: React.FC<ComponentData> = ({data}) => {
   const [userType_Bolean_value, setUserType_Bolean_value] = useState<boolean>(false);
    console.log('User Type Boolean Value:', userType_Bolean_value);
  
    // console.log({data})
  return (
    <div>
        
              {data.type === "radio" && <Radio_Component field={data} setUserType_Bolean_value={setUserType_Bolean_value} />}
              {data.type === "email" && <Email_PassWord_Text_Component field={data} />}
              {data.type === "password" && <Email_PassWord_Text_Component field={data}/>}
              {data.type === "text" && <Email_PassWord_Text_Component  field={data} />}
              {data.type === "select" && <Select_Component field={data} />}
              {data.type === "number" && <Email_PassWord_Text_Component field={data} />}
              {data.type === "textarea" && <Email_PassWord_Text_Component field={data} />}
              {data.type === "checkbox" && <Check_Box  field={data} />}
        
        {/* <p>Out of box</p> */}
     
        
        
        
    </div> 
  )
}

export default Component_Gather













