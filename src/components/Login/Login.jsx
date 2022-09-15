import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/pages/Login.scss';

export default function Login() {
  return (
    <section className=' login container px-4'>
      <div className='wrapper-login  mx-5'>
        <h3 className='header-login'>Login</h3>
        <hr />
        <div className='row'>
          <form className='frm col-5 mx-auto'>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='text'
                className='form-control'
                id='email'
                placeholder='email'
              />
              <span className='errEmail'></span>
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='text'
                className='form-control'
                id='password'
                placeholder='password'
              />
              <span className='errPass'></span>
            </div>
            <div
              className='form-group text-center'
              style={{ position: 'relative' }}
            >
              <NavLink className='register-link' to='/register'>
                Register now ?
              </NavLink>
              <button className='btnLogin'>Login</button>
            </div>
            <div className='form-group'>
              <button className='login-facebook'>
                <i class='fa-brands fa-facebook'></i> Continue with Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
