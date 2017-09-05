import reducer from './Meals.js';
import * as actions from '../../Actions';
import { createStore } from 'redux';

let initialState;
let store;

beforeEach(() => {
  initialState = {
    date: new Date(),
    meals: []
  };
  store = createStore(reducer, initialState);
});

it('does not change the state if the action type is unknown', () => {
  let action = { type: 'UNKNOWN', content: { anything: 'anything' } };
  store.dispatch(action);
  let newState = store.getState();

  expect(newState).toEqual(initialState);
});

it('handles SELECTED_DATE', () => {
  let date = '01 September 2017';
  let action = actions.selectedDate(date);
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.date).toEqual(date);
});

it('handles MEAL_HISTORY_FOR_DAY', () => {
  let action = actions.mealHistoryForDay([
    {
      meal: 'Morning snack',
      foods: [
        {
          name: 'tomato',
          id: 'f400558e-251a-4f7e-8d05-66e35btomato',
          quantity: '50',
          unit: 'grams'
        }
      ]
    },
    {
      meal: 'Evening snack',
      foods: [
        {
          name: 'egg',
          id: 'f400558e-251a-4f7e-8d05-66e35b729egg',
          quantity: '70',
          unit: 'grams'
        }
      ]
    }
  ]);
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.meals[0].meal).toEqual('Morning snack');
  expect(newState.meals[1].meal).toEqual('Evening snack');
  expect(newState.meals[1].foods[0].id).toEqual(
    'f400558e-251a-4f7e-8d05-66e35b729egg'
  );
});

it('handle SHOW_MEAL_DETAILS', () => {
  initialState = {
    ...initialState,
    selectedMeal: {},
    meals: [
      {
        mealName: 'salad',
        details: [928482960, 100888247, 100888247]
      }
    ]
  };

  let action = actions.showMealDetails(initialState.meals[0].mealName);
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.selectedMeal.mealName).toEqual('salad');
  expect(newState.selectedMeal.details.length).toEqual(3);
  expect(newState.selectedMeal.details[0]).toEqual(928482960);
});

// xit('TEMPLATE', () => {
//   let action = {};

//   let newState = reducer(initialState, action);
//   expect(newState).not.toEqual(initialState);
// });
