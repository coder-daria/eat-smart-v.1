import * as actions from '../../Actions';

const initialState = {
  date: new Date(),
  meals: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case actions.SELECTED_DATE:
      return Object.assign({}, state, {date: action.content });

    case actions.MEAL_HISTORY_FOR_DAY:
      return Object.assign({}, state, {meals: action.content});

    case actions.SHOW_MEAL_DETAILS:
    let mealName = action.content;
      let yourMeal = {}

      for (let key in state.meals) {
        if (state.meals[key].mealName === mealName) {
          yourMeal = state.meals[key]
        }
      }
      return Object.assign({}, state, { selectedMeal: yourMeal });


    default:
      return state;
  }
}