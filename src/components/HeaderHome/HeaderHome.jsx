import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../assets/scss/components/HeaderHome/HeaderHome.scss';
import { ACCESS_TOKEN, eraseCookie } from '../../utils/tools';

export default function HeaderHome() {
<<<<<<< HEAD
  const { userLogin } = useSelector((state) => state.userReducer);
  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className='nav-link' to='/login'>
          Login
        </NavLink>
      );
    }
    return (
      <NavLink className='nav-link active' to='/profile'>
        Hello {userLogin.name}
      </NavLink>
    );
  };
  const renderRegisterNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink className='nav-link' to='/register'>
          Register
        </NavLink>
      );
    }
    return (
      <a
        className='nav-link'
        href='/login'
        onClick={() => {
          window.localStorage.clear();
          eraseCookie(ACCESS_TOKEN);
        }}
      >
        Logout
      </a>
    );
  };
=======
  
>>>>>>> toan
  return (
    <header className='wrapper'>
      <nav className='navbar navbar-expand-sm navbar-dark bg-black'>
        <div className='container'>
<<<<<<< HEAD
          <NavLink className='navbar-brand' to='/'>
            <img src='./img/iconBrand.png' alt='iconBrand' />
=======
          <NavLink className='navbar-brand' to='home'>
            Project Hook
>>>>>>> toan
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
<<<<<<< HEAD
                <NavLink className='nav-link' to='/search'>
                  <div className='nav-search'>
                    <i className='icon-search fa fa-search text-light'></i>
                    Search
                  </div>
                </NavLink>
              </li>
              <li className='nav-item active'>
                <NavLink className='nav-link' to='/cart'>
                  <div className='cart-product text-white'>
                    <i className='fa-solid fa-cart-shopping'></i>(1)
                  </div>
                </NavLink>
              </li>
              <li className='nav-item active'>{renderLoginNavItem()}</li>
              <li className='nav-item active'>{renderRegisterNavItem()}</li>
=======
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
>>>>>>> toan
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
