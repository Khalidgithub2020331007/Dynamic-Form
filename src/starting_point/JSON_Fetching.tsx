


import React, { useEffect, useState } from 'react';
import Component_Gather from './Component_Gather';
import type { FieldsType, FormDataType } from '../types/FieldTypes';
import { Form, Button } from 'antd';
import type { FormInstance, FormProps } from 'antd';

const JSON_Fetching: React.FC = () => {
  const [form] = Form.useForm<FormInstance>();
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
    form.resetFields();
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Form validation failed:', errorInfo);
  };

  // --- Inline CSS Styles ---
  const styles = {
    root: {
      backgroundColor: '#f7f9fb',
      minHeight: '100vh',
      padding: '32px 16px',
      display: 'flex',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '28px',
      boxShadow: '0 6px 18px rgba(16,24,40,0.06)',
      border: '1px solid rgba(15,23,42,0.04)',
      width: '100%',
      maxWidth: '900px',
    },
    title: {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#0f172a',
      marginBottom: '18px',
    },
    noData: {
      fontSize: '1.25rem',
      color: '#6b7280',
      textAlign: 'center' as const,
      margin: '20px 0',
    },
    buttonItem: {
      marginTop: '24px',
    },
    button: {
      height: '44px',
      borderRadius: '10px',
      fontWeight: 600,
      background: 'linear-gradient(90deg, #1677ff, #0b5ed7)',
      border: 'none',
      boxShadow: '0 6px 14px rgba(22,119,255,0.14)',
    },
  };

  return (
    <div style={styles.root}>
      <div style={styles.card}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {data ? (
            <>
              <h1 style={styles.title}>{data.title}</h1>
              {data.fields.map((field: FieldsType) => (
                <Component_Gather
                  key={field.id}
                  data={field}
                  userType_Bolean_value={userType_Bolean_value}
                  setUserType_Bolean_value={setUserType_Bolean_value}
                  specialOffers_Bolean_value={specialOffers_Bolean_value}
                  setSpecialOffers_Bolean_value={setSpecialOffers_Bolean_value}
                  email_Bolean_value={email_Bolean_value}
                  setEmail_Bolean_value={setEmail_Bolean_value}
                  country_Bolean_value={country_Bolean_value}
                  setCountry_Bolean_value={setCountry_Bolean_value}
                  state_Boolean_value={state_Boolean_value}
                  setState_Boolean_value={setState_Boolean_value}
                  city_Boolean_value={city_Boolean_value}
                  setCity_Boolean_value={setCity_Boolean_value}
                  form={form}
                />
              ))}
            </>
          ) : (
            <h1 style={styles.noData}>No Data Exist</h1>
          )}

          <Form.Item style={styles.buttonItem}>
            <Button type="primary" htmlType="submit" block style={styles.button}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default JSON_Fetching;





