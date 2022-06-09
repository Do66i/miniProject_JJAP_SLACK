import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './layouts/App';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
