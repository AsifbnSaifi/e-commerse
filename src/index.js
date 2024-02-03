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
import Dashboard from './pages/Dashboard';
import Users from './componenets/Users';
import Register from './pages/Register';



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
            path : '/register',
            element : <Register/>
          },
         
          {
            path: '/dashboard', // Corrected the path name
            element: <Dashboard />,
            children: [
              {
                path: 'adddata',
                element: <Admin />,
              },
              {
                path: 'users',
                element: <Users/>,
              },
            ],
          },
    
      ]
      }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouting}/>
);

