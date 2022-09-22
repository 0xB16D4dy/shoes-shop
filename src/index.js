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
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './assets/scss/styles.scss';
import Demo from './Pages/Demo/Demo';
import { ACCESS_TOKEN, getStore } from './utils/tools';
import { replace } from 'formik';

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
            <Route path='profile' element={<Profile />}></Route>
            <Route path='search' element={<SearchPage />}></Route>
            <Route path='demo' element={<Demo />}></Route>
            <Route path='*' element={<Page404 />}></Route>
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
