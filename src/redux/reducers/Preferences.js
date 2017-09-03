import * as actions from '../../Actions';

const initialState = {
  kcal: 0,
  meals: [],
  details: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_STATISTIC_CARD:
      const details = Object.assign({}, state.details);
      details[action.content] = !details[action.content];
      return Object.assign({}, state, { details });
    case actions.SAVE_PREFERENCES:
      return Object.assign({}, action.content);
    default:
      return state;
  }
}
