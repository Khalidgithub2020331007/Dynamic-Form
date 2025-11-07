// import React, { useEffect, useState } from 'react'
// import Component_Gather from './Component_Gather';
// import type { FormDataType } from '../types/FieldTypes';


// const JSON_Fetching = () => {
//   const [data, setData] = useState<FormDataType | null>(null);
//   useEffect(() => {
//     fetch('src/assets/sample.json')
//       .then(res => res.json())
//       // .then(data=>console.log(data))
//       .then(data => setData(data));
//   }, []);
  
//   return (
//     <div>
//       {data ? <Component_Gather data={data} /> : <h1>No Data Exist</h1>}
//     </div>
//   );
// }

// export default JSON_Fetching












import React, { useEffect, useState } from 'react';
import Component_Gather from './Component_Gather';
import type { FieldsType, FormDataType } from '../types/FieldTypes';
import { Form, Button } from 'antd';
import type { FormProps } from 'antd';

const JSON_Fetching: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<FormDataType | null>(null);
  const [userType_Bolean_value, setUserType_Bolean_value] = useState<boolean>(false);
  const [specialOffers_Bolean_value, setSpecialOffers_Bolean_value] = useState<boolean>(false);
  const [email_Bolean_value, setEmail_Bolean_value] = useState<boolean>(false);
  const [country_Bolean_value, setCountry_Bolean_value] = useState<boolean>(false);
  const [state_Boolean_value, setState_Boolean_value] = useState<boolean>(false);
  const [city_Boolean_value, setCity_Boolean_value] = useState<boolean>(false);


  useEffect(() => {
    fetch('src/assets/sample.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  const onFinish: FormProps['onFinish'] = (values) => {
    console.log('Form submitted successfully:', values);
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Form validation failed:', errorInfo);
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {data ? (
          <>
            <h1>{data.title}</h1>
            {data.fields.map((field: FieldsType) => (
              <Component_Gather key={field.id} data={field}
               userType_Bolean_value={userType_Bolean_value} setUserType_Bolean_value={setUserType_Bolean_value} 
               specialOffers_Bolean_value={specialOffers_Bolean_value} setSpecialOffers_Bolean_value={setSpecialOffers_Bolean_value}
               email_Bolean_value={email_Bolean_value} setEmail_Bolean_value={setEmail_Bolean_value}
               country_Bolean_value={country_Bolean_value} setCountry_Bolean_value={setCountry_Bolean_value}
               state_Boolean_value={state_Boolean_value} setState_Boolean_value={setState_Boolean_value}
               city_Boolean_value={city_Boolean_value} setCity_Boolean_value={setCity_Boolean_value}
               />
            ))}
          </>
        ) : (
          <h1>No Data Exist</h1>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default JSON_Fetching;
