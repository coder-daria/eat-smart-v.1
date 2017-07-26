import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './createStore';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { fetchProducts, convertFoodsFromServer } from './functions.js';

const foods = convertFoodsFromServer(fetchProducts());
const initialState = { foods: foods, selected: 0, foodsOfNewMeal: [], meals: [], predefinedMealsNames: [], mealsPreferences: [] };

let store = createStore(initialState);

window.s = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root'),
      )
    })
  }
}

registerServiceWorker();
