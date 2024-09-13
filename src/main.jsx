import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Layout from "./components/layout.jsx"
import Main from './components/mainbody/Main.jsx';
import Landing from './components/landing.jsx';

import './index.css';

// Define routes with error handling using errorElement

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Landing />} />
      <Route path="main" element={<Main />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
