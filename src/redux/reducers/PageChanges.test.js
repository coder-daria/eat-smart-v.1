import reducer from './Meals.js';
import * as actions from '../../Actions';
import { createStore } from 'redux';

let initialState;
let store;

beforeEach(() => {
  initialState = { date: new Date(), meals: [] };
  store = createStore(reducer, initialState);
});

xit('handles ASYNC_REQUEST_STATUS', () => {});

xit('handles IS_LOADING', () => {});
xit('handles SELECTED_MEAL', () => {});

it('handles GO_TO', () => {});

// xit('TEMPLATE', () => {
//   let action = {};

//   let newState = reducer(initialState, action);
//   expect(newState).not.toEqual(initialState);
// });
