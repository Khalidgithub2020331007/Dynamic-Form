
import './App.css'
import JSON_Fetching from './starting_point/JSON_Fetching'

function App() {

  return (
    <>
      <JSON_Fetching></JSON_Fetching>
    </>
  )
}

export default App


// // App.tsx
// import React from 'react';
// import { Form, Radio, Button } from 'antd';
// import 'antd/dist/reset.css';

// const App: React.FC = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values: any) => {
//     console.log('Selected value:', values.choice);
//   };

//   return (
//     <div style={{ padding: 50 }}>
//       <Form
//         form={form}
//         onFinish={onFinish}
//         initialValues={{ choice: 'option2' }} // Default selected value
//       >
//         <Form.Item
//           label="Select an option"
//           name="choice"
//           rules={[{ required: true, message: 'Please select an option!' }]}
//         >
//           <Radio.Group>
//             <Radio value="option1">Option 1</Radio>
//             <Radio value="option2">Option 2</Radio>
//             <Radio value="option3">Option 3</Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default App;
