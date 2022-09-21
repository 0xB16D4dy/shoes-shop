import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function HeaderHome() {
  
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container'>
          <NavLink className='navbar-brand' to='home'>
            Project Hook
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
            <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='home'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/register'>
                  Register
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/antd'>
                  Antd Demo
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/carts'>
                  Carts
                </NavLink>
              </li>
              <li className='nav-item dropdown'>
                <NavLink
                  className='nav-link dropdown-toggle'
                  to='#'
                  id='dropdownId'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Hooks
                </NavLink>
                <div className='dropdown-menu' aria-labelledby='dropdownId'>
                  <NavLink className='dropdown-item' to='/usestate'>
                    UseState
                  </NavLink>
                  <NavLink className='dropdown-item' to='/useeffect'>
                    UseEffect
                  </NavLink>
                  <NavLink className='dropdown-item' to='/usecallback'>
                    useCallback
                  </NavLink>
                  <NavLink className='dropdown-item' to='/usememo'>
                    useMemo
                  </NavLink>
                  <NavLink className='dropdown-item' to='/useref'>
                    useRef
                  </NavLink>
                  <NavLink className='dropdown-item' to='/useredux'>
                    demo redux (number)
                  </NavLink>
                  <NavLink className='dropdown-item' to='/reduxfacebook'>
                    demo facebook (redux app)
                  </NavLink>
                  <NavLink className='dropdown-item' to='/customhook'>
                    useRoute(custom hook)
                  </NavLink>
                </div>
              </li>
            </ul>
            <form className='d-flex my-2 my-lg-0'>
              <input
                className='form-control me-sm-2'
                type='text'
                placeholder='Search'
              />
              <button
                className='btn btn-outline-success my-2 my-sm-0'
                type='submit'
              >
                <NavLink className={'text-light'} to={'/search'}>
                  Search
                </NavLink>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
