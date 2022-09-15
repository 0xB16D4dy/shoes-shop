import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/scss/styles.scss';
import Page404 from './components/Page404/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='' element={<App />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
