import reducer from './Meals.js';
import * as actions from '../../Actions';
import { createStore } from 'redux';

let initialState;
let store;

beforeEach(() => {
  initialState = { date: new Date(), meals: [] };
  store = createStore(reducer, initialState);
});

it('does not change the state if the action type is unknown', () => {
  let action = { type: 'UNKNOWN', content: { anything: 'anything' } };
  store.dispatch(action);
  let newState = store.getState();

  expect(newState).toEqual(initialState);
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

xit('TEMPLATE', () => {
  let action = {};

  let newState = reducer(initialState, action);
  expect(newState).not.toEqual(initialState);
});
