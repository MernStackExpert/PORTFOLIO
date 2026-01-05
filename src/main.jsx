import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from 'react-router';
import { router } from './Router/Router.jsx';
import RootLayouts from './Layouts/RootLayouts.jsx';

AOS.init({ duration: 1000, once: false });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <RootLayouts />
    </RouterProvider>
  </StrictMode>,
)
