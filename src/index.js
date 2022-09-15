import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './components/Page404/Page404';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import './assets/scss/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='' element={<App />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='*' element={<Page404 />}></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
