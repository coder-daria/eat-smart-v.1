import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './createStore';
import {Provider} from 'react-redux';
import reducer from './Reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {fetchProducts, convertFoodsFromServer} from './functions.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const foods = convertFoodsFromServer(fetchProducts());
const initialState = {
  foods: foods,
  foodsBeingAddedToNewMeal: [],
  meals: [],
  mealsPreferences: []
};
let store = createStore(initialState);

window.s = store;

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.getElementById('root'),
      )
    })
  }
}

store.dispatch({
  type: 'NEW_FOOD',
  content: {
    'f400558e-251a-4f7e-8d05-66e35btomato': {
      name: 'tomato',
      properties: {
        name: 'tomato',
        fat: '50',
        protein: '100',
        carbs: '50',
        id: 'f400558e-251a-4f7e-8d05-66e35btomato'
      }
    }
  }
});

store.dispatch({
  type: 'NEW_FOOD',
  content: {
    'f400558e-251a-4f7e-8d05-66e35b729egg': {
      name: 'egg',
      properties: {
        name: 'egg',
        fat: '100',
        protein: '50',
        carbs: '100',
        id: 'f400558e-251a-4f7e-8d05-66e35b729egg'
      }
    }
  }
});

store.dispatch({
  type: 'ADD_FOODS_OF_NEW_MEAL_TO_MEALS',
  content: {
    mealName: 'breakfast',
    details: [
      {
        id: 'f400558e-251a-4f7e-8d05-66e35btomato',
        quantity: '50',
        unit: 'grams'
      },
      {
        id: 'f400558e-251a-4f7e-8d05-66e35b729egg',
        quantity: '50',
        unit: 'grams'
      }
    ]
  }
});

registerServiceWorker();
