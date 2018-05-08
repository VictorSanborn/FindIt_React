import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './common/redux/reducer';
const store = createStore(reducer);

// Pass the store into the Provider
const AppWithStore = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  )
  
  ReactDOM.render(AppWithStore, document.getElementById('root'));
  registerServiceWorker();
  



