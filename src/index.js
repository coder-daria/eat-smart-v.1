import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { fetchProducts, convertToArray } from './functions.js';

const foods = convertToArray(fetchProducts());

const breakfast = {foods: [foods[0], foods[1], foods[3]]};

const initialState = { items: foods, selected: foods[0], list: [], meals: [breakfast]};
let store = createStore(reducer, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.s = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
