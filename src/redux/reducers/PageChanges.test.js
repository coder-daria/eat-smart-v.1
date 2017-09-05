import reducer from './PagesChanges.js';
import * as actions from '../../Actions';
import { createStore } from 'redux';

let initialState;
let store;

beforeEach(() => {
  initialState = {
    location: '/',
    asyncRequestStatus: 'HIDE_NOTIFICATION',
    isLoading: false
  };
  store = createStore(reducer, initialState);
});

it('handles ASYNC_REQUEST_STATUS', () => {
  let action = actions.asyncRequestStatus('STARTED');
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.asyncRequestStatus).toEqual('STARTED');
});

it('handles IS_LOADING', () => {
  let action = actions.isLoading(true);
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.isLoading).toEqual(true);
});

it('handles GO_TO', () => {
  let action = actions.changeLocation('/preferences');
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.location).toEqual('/preferences');
});

// xit('TEMPLATE', () => {
//   let action = {};

//   let newState = reducer(initialState, action);
//   expect(newState).not.toEqual(initialState);
// });
