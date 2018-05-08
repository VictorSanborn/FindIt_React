import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { Provider } from 'react-redux';
import { reducer } from './common/redux/reducer';
import { PersistGate } from 'redux-persist/integration/react'

//const store = createStore(reducer);

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

// Pass the store into the Provider
const AppWithStore = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>
  )
  
  ReactDOM.render(AppWithStore, document.getElementById('root'));
  registerServiceWorker();
  



