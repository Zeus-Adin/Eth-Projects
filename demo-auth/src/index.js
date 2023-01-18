import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3Modal } from '@web3modal/react';

const config = {
  projectId: 'a323067727af650a4094f3dbc0d7fccc',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'Demo Auth'
  }
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Web3Modal config={config}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
