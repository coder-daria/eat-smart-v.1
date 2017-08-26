import * as actions from '../../Actions';
import reducer from './Preferences.js';

let initialState;

beforeEach(() => {
  initialState = {
    kcal: 0,
    meals: []
  };
});

it('handles SAVE_PREFERENCES', () => {
  let preference = {
    kcal: 2000,
    meals: [{ name: 'supper', seconds: 70200000 }]
  };
  let action = actions.savePreferences(preference);
  let newState = reducer(initialState, action);

  expect(newState).not.toEqual(initialState);
  expect(newState.kcal).toEqual(2000);
  expect(newState.meals[0].name).toEqual('supper');
  expect(newState.meals[0].seconds).toEqual(70200000);
});
