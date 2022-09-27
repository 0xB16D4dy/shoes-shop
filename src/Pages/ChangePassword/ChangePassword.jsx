import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changePasswordApi } from '../../redux/reducers/userReducer';

export default function ChangePassword() {
  const dispatch = useDispatch();
  const onFinish = (value) => {
    // console.log(value);
    dispatch(changePasswordApi(value));
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='changePassword'>
      <div className='wrapper-changePassword container my-5'>
        <Space
          direction='vertical'
          size={20}
          style={{
            display: 'flex',
          }}
        >
          <h3 className='text-center'>Change Password Form</h3>
          <Form
            className='frm-changePassword '
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            wrapperCol={{
              offset: 8,
              span: 8,
            }}
            layout='horizontal'
          >
            <Form.Item
              name={'currentPassword'}
              style={{ marginBottom: '36px' }}
              rules={[
                {
                  required: true,
                  message: 'Please input your current password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className='site-form-item-icon' />}
                placeholder='Current Password'
                size='large'
              />
            </Form.Item>
            <Form.Item
              name={'newPassword'}
              style={{ marginBottom: '36px' }}
              rules={[
                {
                  required: true,
                  message: 'Please input your new password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className='site-form-item-icon' />}
                placeholder='New Password'
                size='large'
              />
            </Form.Item>
            <Form.Item
              name={'confirmNewPassword'}
              style={{ marginBottom: '36px' }}
              dependencies={['newPassword']}
              rules={[
                {
                  required: true,
                  message: 'Please input your confirm new password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Password do not match!');
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder='Confirm New Password'
                prefix={<LockOutlined className='site-form-item-icon' />}
                size='large'
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
              <Button
                type='primary'
                size='large'
                block
                htmlType='submit'
                style={{ padding: '7px 35px', borderRadius: '4px' }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
}
