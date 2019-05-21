import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider }  from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../src/mainLogOnPage/reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
React.DOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);


