import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ProductsList from './componenets/ProductsList';
import AddtoCardPage from './componenets/AddtoCardPage';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';
import Admin from './pages/Admin';



const appRouting = createBrowserRouter([
      {
        path : '/',
        element : <App/>,
        children: [
          {
             path : '/',
             element : <ProductsList/>
          },
          {
            path : 'addtocard',
            element : <AddtoCardPage/>
          },
          {
            path : '/success',
            element : <PaymentSuccess/>
          },
          {
            path : '/failed',
            element : <PaymentFailed/>
          },
          {
            path : '/admin',
            element : <Admin/>
          }
      ]
      }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouting}/>
);

