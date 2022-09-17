import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/configStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from './components/Page404/Page404'

import './assets/scss/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>

        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


