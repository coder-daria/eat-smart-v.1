import reducer from '../../../redux/reducers/Preferences';
import * as actions from '../../../Actions';

let initialState;

beforeEach(() => {
  initialState = {
    kcal: 0,
    meals: [],
    details: {}
  };
});

it('handles TOGGLE_STATISTIC_CARD', () => {
  let action = actions.toggleStatisticCard('dailyCalories');
  let newState = reducer(initialState, action);

  expect(newState.details.dailyCalories).not.toEqual(
    initialState.details.dailyCalories
  );
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
