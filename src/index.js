import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page404 from './Pages/Page404/Page404';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import SearchPage from './Pages/SearchPage/SearchPage';
import Index from './Pages/Index/Index';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './assets/scss/styles.scss';
import Demo from './Pages/Demo/Demo';
import Detail from './Pages/Detail/Detail';
import Register from './Pages/Register/Register';
import Carts from './Pages/Carts/Carts';

//Cấu hình history (chuyển hướng không cần hook useNavigate)
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='' element={<App />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='/' element={<Index></Index>}></Route>
            <Route path='home' element={<Index></Index>}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='search' element={<SearchPage />}></Route>
            <Route path='detail'>
              <Route path=':id' element={<Detail />}></Route>
            </Route>
            <Route path='demo' element={<Demo />}></Route>
            <Route path='register' element={<Register></Register>}></Route>
            <Route path='carts' element={<Carts></Carts>}></Route>
            <Route path='*' element={<Page404 />}></Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
