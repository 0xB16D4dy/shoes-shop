import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/components/HeaderHome/HeaderHome.scss';

export default function HeaderHome() {
  return (
    <header className='wrapper'>
      <nav className='navbar navbar-expand-sm navbar-dark bg-black'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            <img src='./img/iconBrand.png' alt='iconBrand' />
          </NavLink>
          <button
            className='navbar-toggler d-lg-none'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavId'
            aria-controls='collapsibleNavId'
            aria-expanded='false'
            aria-label='Toggle navigation'
          />
          <div className='collapse navbar-collapse' id='collapsibleNavId'>
            <ul className='navbar-nav mt-2 mt-lg-0 ms-auto'>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='/search'>
                  <div className='nav-search'>
                    <i class='icon-search fa fa-search text-light'></i>
                    Search
                  </div>
                </NavLink>
              </li>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='/cart'>
                  <div className='cart-product text-white'>
                    <i class='fa-solid fa-cart-shopping'></i>(1)
                  </div>
                </NavLink>
              </li>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='/login'>
                  Login
                </NavLink>
              </li>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='/register'>
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='menu-cat container'>
        <ul className='navbar-cat'>
          <li className='nav-item'>
            <NavLink className={'actived'} to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/'>Man</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/'>Woman</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/'>Kid</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/'>Sport</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
