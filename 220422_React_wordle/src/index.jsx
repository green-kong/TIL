// const React = require('react');
// const ReactDOM = require('react-dom/client');

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
