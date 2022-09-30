import React from 'react';
import { Field, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerApi } from '../../redux/reducers/registerReducer';
import axios from 'axios';
import '../../assets/scss/pages/Register/Register.scss';
import { Divider } from 'antd';

export default function Register() {
  const dispatch = useDispatch();
  //lay du lieu tu form
  const frm = useFormik({
    initialValues: {
      //Dữ liệu ban đầu mặc định của form
      email: '',
      password: '',
      setPassword: '',
      name: '',
      gender: true,
      phone: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('email không được bỏ trống !')
        .email('email không đúng định dạng !'),
      password: Yup.string()
        .required('password không được bỏ trống !')
        .min(1, 'pass từ 1 - 32 ký tự!')
        .max(32, 'pass từ 1 - 32 ký tự!'),
      setPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'mat khau chua khop')
        .required('setpassword không được bỏ trống !'),
      name: Yup.string().required('name không được bỏ trống !'),
      phone: Yup.number().required('phone phai la so va không được bỏ trống !'),
      gender: Yup.string().oneOf(['true', 'false'], 'fdsafa'),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(registerApi(values));
    },
  });

  return (
    <form className='container d-flex row' onSubmit={frm.handleSubmit}>
      <h3 className='text-center'>Register</h3>
      <Divider />
      <div className='form-group col-6'>
        <p>Email</p>
        <input
          className='form-control'
          id='email'
          name='email'
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.email ? (
          <span className='text-danger'>{frm.errors.email}</span>
        ) : (
          ''
        )}
        <p>Password</p>
        <input
          className='form-control'
          type='password'
          id='password'
          name='password'
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.password ? (
          <span className='text-danger'>{frm.errors.password}</span>
        ) : (
          ''
        )}
        <p>Password confirm</p>
        <input
          className='form-control'
          type='password'
          id='setPassword'
          name='setPassword'
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.setPassword ? (
          <span className='text-danger'>{frm.errors.setPassword}</span>
        ) : (
          ''
        )}
      </div>

      <div className='form-group col-6'>
        <p>Name</p>
        <input
          className='form-control'
          id='name'
          name='name'
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.name ? (
          <span className='text-danger'>{frm.errors.name}</span>
        ) : (
          ''
        )}
        <p>Phone</p>
        <input
          className='form-control'
          id='phone'
          name='phone'
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.phone ? (
          <span className='text-danger'>{frm.errors.phone}</span>
        ) : (
          ''
        )}
        <div className='d-flex align-items-center mt-4'>
          <p>Gender</p>
          <input
            type='radio'
            name='gender'
            value={true}
            className='mx-2'
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          <label for=''>Male</label>
          {frm.errors.gender ? (
            <span className='text-danger'>{frm.errors.gender}</span>
          ) : (
            ''
          )}
          <input
            type='radio'
            name='gender'
            value={false}
            className='mx-2'
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          <label for=''>Female</label>
          {frm.errors.gender ? (
            <span className='text-danger'>{frm.errors.gender}</span>
          ) : (
            ''
          )}
        </div>
        <button className='btn btn-success mt-4' type='submit'>
          SUBMIT
        </button>
      </div>
    </form>
  );
}
