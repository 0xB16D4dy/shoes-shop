import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileApi } from '../../redux/reducers/userReducer';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Form, Input, Button, Radio } from 'antd';

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const [userEdit, setUserEdit] = useState({ ...userLogin });
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(userLogin?.gender);

  useEffect(() => {
    //Khi trang vừa load lên thì gọi api => (dispatch lại getProfileApi đã xây dựng)
    dispatch(getProfileApi());
  }, []);

  // const handleChecked = (e) => {
  //   if (e.target.name === 'male') {
  //     setChecked(true);
  //   } else if (e.target.name === 'female') {
  //     setChecked(false);
  //   }
  // };

  const onFinish = (values) => {
    console.log(values);
  };
  const renderFormUpdate = () => {
    return (
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
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button
            htmlType='submit'
            wrapperCol={{
              span: 16,
            }}
          >
            Button
          </Button>
        </Form.Item>
      </Form>
    );
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
                // console.log(prod);
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
          <div className='wrapper-form'>{renderFormUpdate()}</div>
        </div>
        <hr />
        <div className='wrapper-detail'>
          <div className='header-detail'>
            <div className='title-order-history'>
              <h3>Order History</h3>
            </div>
            <div className='title-favorite'>
              <h3>Favourite</h3>
            </div>
          </div>
          <div className='body-detail'>{renderOrderHistory()}</div>
          <div className='pagination-detail'>
            <nav aria-label='Page navigation example'>
              <ul className='pagination'>
                <li className='page-item'>
                  <a className='page-link' href='#' aria-label='Previous'>
                    <span aria-hidden='true'>{'<'}</span>
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#' aria-current='page'>
                    1
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    2
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    ...
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    9
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#'>
                    10
                  </a>
                </li>
                <li className='page-item'>
                  <a className='page-link' href='#' aria-label='Next'>
                    <span aria-hidden='true'>{'>'}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='clearfix'></div>
        </div>
      </div>
    </div>
  );
}
