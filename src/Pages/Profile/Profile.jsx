import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfileApi,
  updateProfileApi,
  getProductFavoriteApi,
  getUnLikeApi,
} from '../../redux/reducers/userReducer';
import { Form, Input, Button, Radio, Tabs, Pagination, Divider } from 'antd';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { ACCESS_TOKEN, getStore } from '../../utils/tools';
import { Navigate } from 'react-router-dom';

export default function Profile() {
  const { userLogin, productFavoriteList } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const actionThunk = updateProfileApi(values);
    dispatch(actionThunk);
  };

  const renderOrderHistory = () => {
    return userLogin?.ordersHistory.map((arrOrder, index) => {
      return (
        <div className='row-detail' key={index}>
          <div className='date-generate'>
            + Orders have been placed on 09-19-2022
          </div>
          <table className='table'>
            <thead>
              <tr className='thead-background'>
                <th>id</th>
                <th>img</th>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {arrOrder?.orderDetail?.map((prod, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>
                      <img src={prod.image} alt='' width={86} height={56} />
                    </td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>
                      <span
                        style={{
                          padding: '2px 36px',
                          backgroundColor: '#D9D9D9',
                        }}
                      >
                        {prod.quantity}
                      </span>
                    </td>
                    <td>{prod.quantity * prod.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  const renderFavorite = () => {
    return productFavoriteList.map((prod, index) => {
      return (
        <div key={index}>
          <div className='wrapper-favorite'>
            <table className='table'>
              <thead>
                <tr className='text-center'>
                  <th>id</th>
                  <th>image</th>
                  <th>name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center' style={{ lineHeight: '8' }}>
                  <td>{prod.id}</td>
                  <td>
                    <img src={prod.image} alt='' width={100} height={100} />
                  </td>
                  <td>{prod.name}</td>
                  <td>
                    <Button
                      onClick={() => {
                        dispatch(getUnLikeApi(prod.id));
                      }}
                      icon={
                        <DislikeOutlined
                          style={{ color: '#1890ff', fontSize: '30px' }}
                        />
                      }
                      size='large'
                      style={{ border: 'none', boxShadow: 'none' }}
                    ></Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(getProfileApi());
    dispatch(getProductFavoriteApi());
  }, []);

  if (!getStore(ACCESS_TOKEN)) {
    alert('Đăng nhập để vào trang này!');
    return <Navigate to='/login' />;
  }

  return (
    <div>
      <div className='title-profile d-inline-block'>profile</div>
      <div className='container'>
        <div className='wrapper-profile d-flex align-items-center'>
          <div className='nav-avatar'>
            <img
              src={userLogin?.avatar}
              alt={userLogin?.name}
              className='w-100'
            />
          </div>
          <div className='wrapper-form'>
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 18,
              }}
              layout='horizontal'
              onFinish={onFinish}
              size='large'
              className='frm-update'
              initialValues={userLogin}
            >
              <Form.Item label='Email' name='email'>
                <Input disabled />
              </Form.Item>
              <Form.Item
                label='Name'
                name='name'
                rules={[
                  {
                    pattern:
                      /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/,
                    message: `Name is Invalid format!`,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Phone'
                name='phone'
                rules={[
                  {
                    pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                    message: `Phone is Invalid format!`,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label='Gender' name='gender'>
                <Radio.Group>
                  <Radio value={true}> Male </Radio>
                  <Radio value={false}> Female </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label='Password'
                name='password'
                rules={[
                  // {
                  //   required: true,
                  //   message: 'Please input your Password!',
                  // },
                  {
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                    message: `Should contain at least one upper case, one lower case, one digit, 8 from the mentioned characters`,
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
                <Button htmlType='submit' type='primary'>
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <hr />
        <div className='wrapper-detail'>
          <div className='header-detail'>
            <Tabs defaultActiveKey='1'>
              <Tabs.TabPane tab='Order History' key='1'>
                <div className='body-detail'>{renderOrderHistory()}</div>
                <div className='pagination-detail'>
                  <Pagination
                    defaultCurrent={1}
                    total={10}
                    pageSize={1}
                    showLessItems={true}
                    className='pagination-detail'
                  />
                </div>
                <div className='clearfix'></div>
              </Tabs.TabPane>
              <Tabs.TabPane tab='Favourite' key='2'>
                {renderFavorite()}
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
