import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import ErrorPage from './c/ErrorPage';
import Login from './c/Login';
import Register from './c/register';
import Dashboard from './c/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={'/'}
      errorElement={<ErrorPage/>} >
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/dashboard'} element={<Dashboard/>}/>
      </Route>
  )
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
