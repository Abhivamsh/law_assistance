import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../Law-Assistant-main/frontend/src/App.jsx';

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('app')
);




