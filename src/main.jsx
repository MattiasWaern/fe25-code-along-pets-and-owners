import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './css/_index.css';

import App from './App';
import Start from './pages/Start';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Start />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      }
    ]
  }
]);

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
