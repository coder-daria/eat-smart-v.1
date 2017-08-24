
export const NEW_FOOD = "NEW_FOOD";
export const SHOW_MEAL_DETAILS = "SHOW_MEAL_DETAILS";
export const SAVE_PREFERENCES = "SAVE_PREFERENCES";
export const MEAL_HISTORY_FOR_DAY = "MEAL_HISTORY_FOR_DAY";
export const UPDATE_PREFERENCE = "UPDATE_PREFERENCE";
export const SELECTED_DATE = "SELECTED_DATE";
export const EDIT_FOOD = "EDIT_FOOD";
export const IS_LOADING = "IS_LOADING";
export const DATA_RECEIVED = "DATA_RECEIVED";


export const newFood = food => {
    return { type: NEW_FOOD, content: food };
}

export function showMealDetails(mealName) {
    return { type: SHOW_MEAL_DETAILS, content: mealName }
}

export function editFood(food) {
    return { type: EDIT_FOOD, content: food }
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
export function dataReceived(boolean) {
    return { type: DATA_RECEIVED, content: boolean };
}