import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { fetchProducts, convertFoodsFromServer } from './functions.js';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
const foods = convertFoodsFromServer(fetchProducts());
const initialState = { foods: foods, selected: 0, foodsOfNewMeal: [], meals: [], predefinedMealsNames: [], mealsPreferences: []};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(logger)));

window.s = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
