import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './createStore';
import {Provider} from 'react-redux';
import reducer from './Reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {fetchProducts, convertFoodsFromServer} from './functions.js';

const foods = convertFoodsFromServer(fetchProducts());
const initialState = {
  foods: foods,
  selected: 0,
  foodsOfNewMeal: [],
  meals: [],
  predefinedMealsNames: [],
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
    'f400558e-251a-4f7e-8d05-66e35b729f0f': {
      name: 'tomato',
      properties: {
        name: 'tomato',
        fat: '0.2',
        protein: '0.9',
        carbs: '3.9',
        id: 'f400558e-251a-4f7e-8d05-66e35b729f0f'
      }
    }
  }
});

// store.dispatch({
//   type: 'ADD_FOODS_OF_NEW_MEAL_TO_MEALS',
//   content: {
//     mealName: 'breakfast',
//     details: [
//       {
//         id: '46218af1-900a-437c-8cdc-5685f26f3974',
//         quantity: '100'
//       }
//     ]
//   }
// });

registerServiceWorker();
