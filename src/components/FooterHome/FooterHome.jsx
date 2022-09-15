import React from 'react';
import '../../assets/scss/components/FooterHome/FooterHome.scss';

export default function FooterHome() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h3 className='header-footer'>GET HELP</h3>
            <div className='content-footer'>
              <p>Home</p>
              <p>Nike</p>
              <p>Adidas</p>
              <p>Contact</p>
            </div>
          </div>
          <div className='col-4 line-left'>
            <h3 className='header-footer'>SUPPORT</h3>
            <div className='content-footer'>
              <p>About</p>
              <p>Contact</p>
              <p>Help</p>
              <p>Phone</p>
            </div>
          </div>
          <div className='col-4 line-left'>
            <h3 className='header-footer'>REGISTER</h3>
            <div className='content-footer'>
              <p>Register</p>
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
      <div className='copy-right'>
        <p className='container'>
          <span>©</span> 2022 Cybersoft All Rights Reserved <span>|</span>{' '}
          Design Theme by Trương Tấn Khải.
        </p>
      </div>
    </footer>
  );
}
