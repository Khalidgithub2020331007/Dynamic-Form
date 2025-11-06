


import React from 'react';
import type { FieldsType } from '../types/FieldTypes';
import { Form, Radio, Button } from 'antd';
import type { FormProps } from 'antd';
import { getValidationRules } from '../validation/validation';
import './Component.css';

type ComponentData = {
  field: FieldsType;
};

const Radio_Component: React.FC<ComponentData> = ({ field }) => {
  const [form] = Form.useForm();

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
        initialValues={{ [field.name]: String(field.defaultValue) }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          key={field.id}
          name={field.name}
          label={field.label}
          rules={getValidationRules(field.validations)}
        >
          <Radio.Group>
            {field.options?.map((opt) => (
              <Radio key={opt.value} value={opt.value}>
                {opt.label}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Radio_Component;
