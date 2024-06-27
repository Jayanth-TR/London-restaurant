
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import './menustyle.css';

const rootElement = document.getElementById('root');

const renderMethod = rootElement.hasChildNodes()
  ? ReactDOM.createHydrateRoot // Use createHydrateRoot for server-side rendering
  : ReactDOM.createRoot;

const root = renderMethod(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
