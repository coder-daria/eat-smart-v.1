import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { fetchProducts, convertFoodsFromServer } from './functions.js';

const foods = convertFoodsFromServer(fetchProducts());
const foodId = 73534323;
const initialState = { foods: foods, selected: foodId, foodsOfNewMeal: [], meals: [], predefinedMealsNames: []};
let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.s = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
