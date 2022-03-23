import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import './app/translations/i18n';
const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
};

window.onload = () => {
    render();
};

