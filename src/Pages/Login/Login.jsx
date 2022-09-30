import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import LoginFaceBook from '../../components/LoginFacebook/LoginFacebook';

export default function Login() {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Email không được bỏ trống')
        .email('Email không đúng định dạng'),
      password: Yup.string()
        .required('Password không được bỏ trống')
        .min(1, 'Password từ 1 - 32 kí tự!')
        .max(32, 'Password từ 1 - 32 kí tự!'),
    }),
    onSubmit: (values) => {
      const actionThunk = loginApi(values);
      dispatch(actionThunk);
    },
  });
  return (
    <section className=' login container px-4'>
      <div className='wrapper-login  mx-5'>
        <h3 className='header-login'>Login</h3>
        <hr />
        <div className='row'>
          <form className='frm col-lg-5 col-sm-8 mx-auto' onSubmit={frm.handleSubmit}>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='text'
                className='form-control'
                id='email'
                placeholder='email'
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.email ? (
                <span className='errEmail'>{frm.errors.email}</span>
              ) : (
                ''
              )}
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='text'
                className='form-control'
                id='password'
                placeholder='password'
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.password ? (
                <span className='errPass'>{frm.errors.password}</span>
              ) : (
                ''
              )}
            </div>
            <div className='changePasswordWrapper'>
              <NavLink
                className='changePassword-link text-secondary'
                to='/changepassword'
              >
                Change Password
              </NavLink>
            </div>
            <div className='btnLoginWrapper'>
              <button className='btnLogin ' type='submit'>
                Login
              </button>
            </div>
            <div className='form-group wrapper-login-fb'>
              <LoginFaceBook />
              <NavLink className='register-link' to='/register'>
                Register now ?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
