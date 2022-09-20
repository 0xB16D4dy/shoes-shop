import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/configStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from './components/Page404/Page404'
import './assets/scss/styles.scss'
import Index from './components/Pages/Index';
import Detail from'./components/Pages/Detail';
import Register from './components/Pages/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route path='home'element={<Index></Index>}></Route>
          <Route path='detail'>
             <Route path=':id' element={<Detail />} ></Route>
          </Route>
          <Route path='register'element={<Register></Register>}></Route>

          <Route path='*'element={<Page404></Page404>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


