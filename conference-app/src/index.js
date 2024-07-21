import React from 'react';
import { createRoot } from 'react-dom/client'; // importation de createRoot
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // création du root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
