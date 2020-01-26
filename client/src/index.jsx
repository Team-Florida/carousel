
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


import '../dist/styles.css';

// Attach App to the DOM, replacing the div with ID app
ReactDOM.render(<App/>, document.getElementById('app'));