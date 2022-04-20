const React = require('react');
const ReactDOM = require('react-dom/client');

const App = require('./App.jsx');

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
