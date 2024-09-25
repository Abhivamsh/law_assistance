import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import { StrictMode } from 'react';
import App from './App'; // Ensure App.jsx exists in the same directory
import reportWebVitals from './reportWebVitals'; // Optional for tracking performance
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root'); // Ensure this matches the div in your index.html

if (rootElement) { // Check if the root element exists
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <Router>
                <App />
            </Router>
        </StrictMode>
    );
}

// Optional: report web vitals
reportWebVitals();
