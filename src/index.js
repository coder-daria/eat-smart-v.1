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

const initialState = { items: foods, selected: foods[0], list: [], meals: [], selectedMeal: {}, predefinedMealsNames: []};
let store = createStore(reducer, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.s = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
