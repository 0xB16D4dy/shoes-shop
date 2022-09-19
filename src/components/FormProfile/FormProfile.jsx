import React, { useState } from 'react';
// import {  } from '@ant-design/icons';
import { Form, Input, Button, Radio, Upload } from 'antd';
import { useSelector } from 'react-redux';

const FormDemo = () => {
  const userLogin = useSelector((state) => state.userReducer);
  const [userEdit, setUserEdit] = useState({
    ...userLogin,
  });
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className='container'>
      <div className='d-flex align-items-center'>
        <div
          className='avatar'
          style={{
            width: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className='wrapper-avatar'
            style={{ padding: '20px' }}
          >
            <img
              src='https://picsum.photos/50/50'
              alt='...'
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
          </div>
        </div>
        <Form
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout='horizontal'
          onFinish={onFinish}
          size='large'
          style={{
            width: '70%',
            marginTop: '20px',
            borderLeft: '1px #000 solid',
          }}
        >
          <Form.Item label='Email' name='email'>
            <Input value={userEdit?.email} />
          </Form.Item>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input value={userEdit?.name} />
          </Form.Item>
          <Form.Item label='Phone' name='phone'>
            <Input value={userEdit?.phone} />
          </Form.Item>
          <Form.Item
            label='Gender'
            name='gender'
            rules={[
              {
                required: true,
                message: 'Please input your Gender!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}> Male </Radio>
              <Radio value={false}> Female </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password value={userEdit?.password} />
          </Form.Item>
          {/* <Form.Item label='Upload' valuePropName='fileList'>
          <Upload action='/upload.do' listType='picture-card'>
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item> */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType='submit'>Button</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormDemo;
