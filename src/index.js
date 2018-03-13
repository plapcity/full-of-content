import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
