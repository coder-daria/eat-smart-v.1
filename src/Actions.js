export const NEW_FOOD = 'NEW_FOOD';
export const SHOW_MEAL_DETAILS = 'SHOW_MEAL_DETAILS';
export const SAVE_PREFERENCES = 'SAVE_PREFERENCES';
export const MEAL_HISTORY_FOR_DAY = 'MEAL_HISTORY_FOR_DAY';
export const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE';
export const SELECTED_DATE = 'SELECTED_DATE';
export const EDIT_FOOD = 'EDIT_FOOD';
export const IS_LOADING = 'IS_LOADING';
export const DATA_RECEIVED = 'DATA_RECEIVED';
export const GO_TO = 'GO_TO';
export const TOGGLE_STATISTIC_CARD = 'TOGGLE_STATISTIC_CARD';
export const SELECTED_MEAL = 'SELECTED_MEAL';

export const ASYNC_REQUEST_STATUS = 'ASYNC_REQUEST_STATUS';
export const ASYNC_REQUEST_STATUS_ENUM = {
  STARTED: 'STARTED',
  FINISHED: 'FINISHED',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION'
};

export const newFood = food => {
  return { type: NEW_FOOD, content: food };
};

export function showMealDetails(mealName) {
  return { type: SHOW_MEAL_DETAILS, content: mealName };
}

export function editFood(food) {
  return { type: EDIT_FOOD, content: food };
}

export function isLoading(value) {
  return { type: IS_LOADING, content: value };
}

export function savePreferences(value) {
  return { type: SAVE_PREFERENCES, content: value };
}

export function selectedDate(date) {
  return { type: SELECTED_DATE, content: date };
}

export function mealHistoryForDay(meals) {
  return { type: MEAL_HISTORY_FOR_DAY, content: meals };
}
export function asyncRequestStatus(status, message) {
  return { type: ASYNC_REQUEST_STATUS, content: status, message };
}
export const changeLocation = location => {
  return { type: GO_TO, content: location };
};
export const toggleStatisticCard = statistic => {
  return { type: TOGGLE_STATISTIC_CARD, content: statistic };
};
export const selectedMeal = selectedMealIndex => {
  return { type: SELECTED_MEAL, content: selectedMealIndex };
};

//Beers actions

export const NEW_BEERS = 'NEW_BEERS';
export const FETCH_SIMILAR_BEERS = 'FETCH_SIMILAR_BEERS';
export const MODAL_CLOSED = 'MODAL_CLOSED';

export const newBeers = beers => {
  return { type: NEW_BEERS, content: beers };
};
export const fetchSimilarBeers = beers => {
  return { type: FETCH_SIMILAR_BEERS, content: beers };
};

export const modalClosed = () => {
  return { type: MODAL_CLOSED };
};
